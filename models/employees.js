module.exports = function (sequelize, Sequelize) {
  var Employees = sequelize.define("Employees", {
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },

    city: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    state: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    zip_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 5]
      }
    },

    email_address: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1, 140]
      }
    },

    phone_number: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 15] 
      }
    },

    position: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 65]
      }
    },

    department: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 65]
      }
    },

    start_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },

    end_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },

    employment_status: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    shift: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },

    manager: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },

    photo: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },

    favorite_color: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    }
  });
  return Employees;
};