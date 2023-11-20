# APLICACION PARA INSCRIPCION DE ALUMNOS EN CURSOS DE UNA ESCUELA ONLINE

## PARA ARRANCAR LA APLICACION:

- Una vez clonado el repositorio del frontend:  https://github.com/Abrahamv19/Angular_pf_entrega_final.git, corra el comando: npm install
- Una vez clonado el repositorio del backend: https://github.com/Abrahamv19/Angular_Json_Server_Api_PF.git, corra el comando: npm install
- Para arrancar el front corra en comando: ng serve -o
- Para arrancar el back corra el comando: npm run start
- Ingrese usuario y contraseña:
1. Para usuario tipo admin:
    - ususario: admin1@g.com
    - contraseña: 123
2. Para usuario tipo employee:
    - ususario: employee1@g.com
    - contraseña: 456
3. Para usuario tipo student:
    - ususario: student1@mail.com
    - contraseña: 789
- Tambien puede consultar la lista de estudiantes ingresando como usuario admin en el link de usuarios o en la aplicación del backend (Angular_Json_Server_Api_PF) en el archivo db.json.
- Recuerde las Jerarquias de Usuarios
    - ADMIN: Pueden agregar, editar y borrar usuarios y cursos.
    - EMPLOYEE: Solo pueden hacer incripciones de usuarios de tipo STUDENT en los cursos disponibles.
    - STUDENT: No tiene acceso a la plataforma, necesita un administrador o empleado para inscribirse en algun curso.

## PARA PARAR LA APLICACION
- En el front ejecute el comando: ctrl + c
- En el back ejecute el comando: ctrl + c


