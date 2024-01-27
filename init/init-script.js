/* db.createCollection('a_users', { capped: false });
db.createCollection('appk', { capped: false }); */

/* db.users.insert([
    {
        "username": "ragnar777",
        "dni": "VIKI771012HMCRG093",
        "enabled": true,
        "password_not_encrypted": "s3cr3t",
        "password": "$2a$10$P6MICmgs0K5clfkCU4NZseZYrCTKxOCkTSQgnIqkc2njUamiY4y.6",
        "role":
            {
                "granted_authorities": ["read"]
            }
    },
    {
        "username": "heisenberg",
        "dni": "BBMB771012HMCRR022",
        "enabled": true,
        "password_not_encrypted": "p4sw0rd",
        "password": "$2a$10$Ncjn/PedW0ewTai7DDSeQO3WhLS86aKXMh9QH08ZbVpFAc8300cIK",
        "role":
            {
                "granted_authorities": ["read"]
            }
    },
    {
        "username": "misterX",
        "dni": "GOTW771012HMRGR087",
        "enabled": true,
        "password_not_encrypted": "misterX123",
        "password": "$2a$10$OvPWDXWX5lJ141fuM1U4KuSW7ihm0UhMvCpZ5zQ/ihl6TvyjY.uje",
        "role":
            {
                "granted_authorities": ["read", "write"]
            }
    },
    {
        "username": "neverMore",
        "dni": "WALA771012HCRGR054",
        "enabled": true,
        "password_not_encrypted": "4dmIn",
        "password": "$2a$10$vFC2zVHNXJ6LVhR.llCvneUq8J4XZy1hEd8lBow6m5viIO7eaAkVm",
        "role":
            {
                "granted_authorities": ["write"]
            }
    }
]); */



print('Start #################################################################');

db = db.getSiblingDB('data');
db.createUser(
  {
    user: 'root',
    pwd: 'example',
    roles: [{ role: 'readWrite', db: 'data' }],
  },
);
db.createCollection('users');

db = db.getSiblingDB('api_dev_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_dev_db' }],
  },
);
db.createCollection('users');

db = db.getSiblingDB('api_test_db');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'api_test_db' }],
  },
);
db.createCollection('users');

print('END #################################################################'); 