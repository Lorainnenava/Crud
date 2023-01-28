const Users = require("../model/modelo");

//MOSTRAR USUARIOS QUE ESTAN EN LA BASE DE DATOS
const getUser = async (req, res) => {
  const usuario = await Users.findAll();
  res.json(usuario);
};

//MOSTRAR UN USUARIO POR SU ID
const getUsers = async (req, res) => {
  const { id } = req.params;
  const usuarios = await Users.findByPk(id);
  if (usuarios) {
    res.json(usuarios);
  } else {
    res.status(404).json({ msg: `No existe el usuario con el id ${id}` });
  }
};

//AGREGAR USUARIO
const postUser = async (req, res) => {
  const { body } = req;
  try {
    //NO GUARDAR DOS USUARIOS IGUALES
    const existe = await Users.findOne({
      where: {
        usuario: body.usuario,
      },
    });
    if (existe) {
      return res.status(400).json({
        msg: "Ya existe un usuario con el nombre " + body.usuario,
      });
    } //NO GUARDAR DATOS VACIOS
    if (body.usuario == '' || body.contraseña == '') {
      return res.status(404).json({
        msg: "No se permiten datos vacios",
      });
    }

    const user = new Users(body);
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Hable con el administrador" });
  }
};

//EDITAR USUARIO
const putUser = async (req, res) => {
  const {id}= req.params;
  const {body} = req;

  try{

    const usuario= await Users.findByPk( id );
    if(!usuario) {
      return res.status(404).json({
        msg: "No existe un usuario con el id "+ id
      });
    }

    await usuario.update(body);
    res.json(usuario);

  }catch(err) {
    console.log(err);
    res.status(500).json({
      msg:'hable con el administrador'
    })
  }
}

//ELIMINAR USUARIO
const deleteUser = async (req, res) => {

  const {id}= req.params;
  const {body} = req;

    const usuario = await Users.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg:'No existe un usuario con id '+id
      })
    }

    await usuario.destroy(body);
    res.json(usuario);
  }


module.exports = {
  getUser,
  getUsers,
  postUser,
  putUser,
  deleteUser
}
