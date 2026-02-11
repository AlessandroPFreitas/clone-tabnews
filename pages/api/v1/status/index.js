import database from "infra/database.js"

const status = async (request, response) => {
  const updatedAt = new Date().toISOString()
  const maxConnections = await database.query("SHOW max_connections;")

  const dbName = process.env.POSTGRES_DB
  const usedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  })
  const usedConnectionsCount = usedConnections.rows[0].count
  const versionPostgresql = await database.query("SHOW server_version;")

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version_postgresql: versionPostgresql.rows[0].server_version,
        max_connections: parseInt(maxConnections.rows[0].max_connections),
        used_connections: parseInt(usedConnectionsCount),
      },
    },
  })
}

export default status
