import { Oficina } from "../models/Oficina.js";

export const obtenerOficinas = async (req, res) => {
  try {
    const oficinas = await Oficina.findAll();
    res.status(200).json(oficinas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las oficinas", error });
  }
};

export const obtenerOficinaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const oficina = await Oficina.findByPk(id);

    if (!oficina) {
      return res.status(404).json({ message: "Oficina no encontrada" });
    }

    res.status(200).json(oficina);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la oficina", error });
  }
};

export const crearOficina = async (req, res) => {
  try {
    const { nombre, usuarios } = req.body;

    const nuevaOficina = await Oficina.create({ nombre, usuarios });

    res.status(201).json(nuevaOficina);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la oficina", error });
  }
};

export const actualizarOficina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, usuarios } = req.body;

    const oficina = await Oficina.findByPk(id);

    if (!oficina) {
      return res.status(404).json({ message: "Oficina no encontrada" });
    }

    oficina.nombre = nombre;
    oficina.usuarios = usuarios;
    await oficina.save();

    res.status(200).json(oficina);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la oficina", error });
  }
};
export const eliminarOficina = async (req, res) => {
  try {
    const { id } = req.params;

    const oficina = await Oficina.findByPk(id);

    if (!oficina) {
      return res.status(404).json({ message: "Oficina no encontrada" });
    }

    await oficina.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la oficina", error });
  }
};
