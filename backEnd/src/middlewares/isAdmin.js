export const isAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== "admin") {
    return res.status(403).json({ message: "Acces denied" });
  }
  next();
};
