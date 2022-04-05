module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38434985c29e0d814ad991c7fed9fd8c'),
  },
});
