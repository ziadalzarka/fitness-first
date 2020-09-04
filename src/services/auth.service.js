const serialNumber = require("serial-number");
const bcrypt = require("bcryptjs");

angular.module("app", []).service("auth", function ($http) {
  serialNumber.preferUUID = true;

  function getUUID() {
    return new Promise((resolve, reject) => {
      serialNumber((err, serial) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(serial);
      });
    });
  }

  async function getPayload() {
    const uuid = await getUUID();
    return { name: "ahmedelhasawy", uuid };
  }

  function requestHash({ name, uuid }) {
    const uri = `http://grayinstasave.000webhostapp.com/fitness-first/active.php?name=${name}&uuid=${uuid}`;
    return $http.get(uri).then((res) => res.data);
  }

  function validateHash({ name, uuid }, hash) {
    if (!hash) {
      return false;
    }
    return bcrypt.compareSync(`${name}:${uuid}`, hash);
  }

  return {
    /**
     * @returns {'ok'|'invalid'|'internet'}
     */
    check: async function () {
      try {
        const payload = await getPayload();
        try {
          const hash = await requestHash(payload);
          const validated = validateHash(payload, hash);
          return validated ? "ok" : "invalid";
        } catch {
          return "internet";
        }
      } catch {
        return "error";
      }
    },
  };
});
