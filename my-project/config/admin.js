module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: '4ac50eb7015a2cfd828011c15ee35a5062359eb9abe50f40523cdad3a20afccf731d8dcf841e5d3933e04c7e9fc1f2d39a4ab311b948c3264a5d91a4be0c04d36bb1e6a32419cff71fd3655c78d55ea126fcce663c4d61352f7d46eb0c76cf84c850d2db729719114c1bd23ad1b7d901052e4d320b5530110bcb005e5d5eb42a',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
