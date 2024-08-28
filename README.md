# api-graphql
Ejemplo de API con GraphQL

npm (versión 6 o superior)
PostgreSQL (cualquier versión compatible)
Instalación
Clonar el Repositorio

bash
Copiar código
git clone https://github.com/tuusuario/my-graphql-project.git
cd my-graphql-project
Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

bash
Copiar código
npm install
Configurar las Variables de Entorno

Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

env
Copiar código
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=admin
DB_DATABASE=mydatabase
Levantar el Servidor

Ejecuta el siguiente comando para iniciar el servidor:

bash
Copiar código
npm run start
La API estará disponible en http://localhost:3000/graphql.

Uso
Queries
Obtener Todos los Usuarios
Puedes obtener una lista de todos los usuarios utilizando la siguiente query:

graphql
Copiar código
query {
  users {
    id
    username
    name
    lastname
    email
  }
}
Obtener un Usuario por ID
graphql
Copiar código
query {
  user(id: "user-uuid") {
    id
    username
    name
    lastname
    email
  }
}
Mutations
Crear un Nuevo Usuario
graphql
Copiar código
mutation {
  createUser(createUserInput: {
    username: "johndoe123",
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    faceDescriptors: ["descriptor1", "descriptor2"]
  }) {
    id
    username
    name
    lastname
    email
  }
}
Dependencias
El proyecto requiere las siguientes dependencias:

@nestjs/common: Librerías comunes de NestJS.
@nestjs/core: Núcleo de NestJS.
@nestjs/graphql: Soporte de GraphQL para NestJS.
graphql: Implementación de GraphQL.
apollo-server-express: Integración de Apollo Server con Express.
@nestjs/apollo: Soporte para Apollo Server en NestJS.
@nestjs/typeorm: Integración de TypeORM con NestJS.
typeorm: ORM utilizado para interactuar con la base de datos.
pg: Conector para PostgreSQL.
dotenv: Carga de variables de entorno desde un archivo .env.
@nestjs/config: Módulo para manejar la configuración y variables de entorno en NestJS.
Estructura del Proyecto
bash
Copiar código
src/
│
├── app.module.ts       # Módulo principal de la aplicación
├── main.ts             # Punto de entrada de la aplicación
├── user/               # Módulo de usuarios
│   ├── dto/            # Data Transfer Objects (DTOs)
│   ├── entities/       # Entidades de la base de datos
│   ├── user.module.ts  # Módulo de usuarios
│   ├── user.resolver.ts # Resolvers de GraphQL
│   ├── user.service.ts  # Servicios de usuarios
│
└── schema.gql          # Archivo de esquema de GraphQL generado automáticamente
Contribuir
Si deseas contribuir a este proyecto, por favor, abre un issue o envía un pull request.
