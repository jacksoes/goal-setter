const logOutController = async (req, res) => {

  req.session.destroy(err => {
    if (err) {
      console.error('error destroying cookies', err)
      return res.status(500).send('failed log out')
    }
  } )

  res.clearCookie("connect.sid");

  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = logOutController;
