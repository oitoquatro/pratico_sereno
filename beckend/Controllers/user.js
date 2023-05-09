import { db } from "../db.js";

export const getUsers = (_, res) => {
  const consulta = "SELECT * FROM elenco"
  db.query(consulta, (err, data) => {
    if (err) return res.json (err);

    return res.status(200).json(data);
  });
};