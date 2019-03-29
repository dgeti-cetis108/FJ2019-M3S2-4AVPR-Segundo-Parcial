/*
Registro de usuario
  Nombre
  Apellidos
  Correo Electronico
  Telefono
  Contraseña
  Llave de recuperación
  Fecha de modificación
  Fecha de creación
*/

create table users (
  id int auto_increment primary,
  email varchar(200) not null unique,
  password varchar(300) not null,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  phone varchar(30) default null,
  remember_token varchar(200) default null,
  update_at timestamp not null,
  created_at timestamp not null
);
