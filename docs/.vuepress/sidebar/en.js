module.exports = [
  {
    title: "Downloads",
    directoryPath: "downloads/",
    children: ["downloads"],
    sidebarDepth: 1
  },
  {
    title: "Compilation and Deployment",
    directoryPath: "installing/",
    children: ["compilation", "install-deploy", "upgrade"]
  },
  {
    title: "Getting Started",
    directoryPath: "getting-started/",
    children: [
      "basic-usage",
      "advance-usage",
      "best-practice",
      "data-partition",
      "data-model-rollup",
      "hit-the-rollup"
    ]
  },
  {
    title: "Administrator Guide",
    directoryPath: "administrator-guide/",
    children: [
      {
        title: "Load Data",
        directoryPath: "load-data/",
        children: [
          "load-manual",
          "broker-load-manual",
          "stream-load-manual",
          "routine-load-manual",
          "insert-into-manual"
        ],
        sidebarDepth: 2
      },
      {
        title: "Schema Change",
        directoryPath: "alter-table/",
        children: [
          "alter-table-bitmap-index",
          "alter-table-rollup",
          "alter-table-schema-change"
        ],
        sidebarDepth: 2
      },
      {
        title: "HTTP API",
        directoryPath: "http-actions/",
        children: [
          "cancel-label",
          "compaction-action",
          "fe-get-log-file",
          "get-label-state",
          "restore-tablet"
        ],
        sidebarDepth: 1
      },
      {
        title: "Maintainence Operation",
        directoryPath: "operation/",
        children: [
          "metadata-operation",
          "monitor-alert",
          "multi-tenant",
          "tablet-meta-tool",
          "tablet-repair-and-balance"
        ],
        sidebarDepth: 2
      },
      {
        title: "Configuration",
        directoryPath: "config/",
        children: ["fe_config"],
        sidebarDepth: 1
      },
      "backup-restore",
      "broker",
      "colocation-join",
      "dynamic-partition",
      "export_manual",
      "privilege",
      "small-file-mgr",
      "sql-mode",
      "time-zone",
      "variables"
    ],
    sidebarDepth: 1
  },
  {
    title: "Extending Ability",
    directoryPath: "extending-doris/",
    children: ["doris-on-es", "user-defined-function"]
  },
  {
    title: "Design Documents",
    directoryPath: "internal/",
    children: [
      "doris_storage_optimization",
      "grouping_sets_design",
      "metadata-design"
    ]
  },
  {
    title: "SQL Manual",
    directoryPath: "sql-reference/",
    children: [
      {
        title: "SQL Functions",
        directoryPath: "sql-functions/",
        children: [
          {
            title: "Date Time Functions",
            directoryPath: "date-time-functions/",
            children: [
              "curdate",
              "current_timestamp",
              "date_add",
              "date_format",
              "date_sub",
              "datediff",
              "day",
              "dayname",
              "dayofmonth",
              "dayofweek",
              "dayofyear",
              "from_days",
              "from_unixtime",
              "hour",
              "minute",
              "month",
              "monthname",
              "now",
              "second",
              "str_to_date",
              "timediff",
              "timestampadd",
              "timestampdiff",
              "to_days",
              "unix_timestamp",
              "utc_timestamp",
              "workofyear",
              "year"
            ]
          },
          {
            title: "Sptial Functions",
            directoryPath: "spatial-functions/",
            children: [
              "st_astext",
              "st_circle",
              "st_contains",
              "st_distance_sphere",
              "st_geometryfromtext",
              "st_linefromtext",
              "st_point",
              "st_polygon",
              "st_x",
              "st_y"
            ]
          },
          {
            title: "String Functions",
            directoryPath: "string-functions/",
            children: [
              "ascii",
              "concat",
              "concat_ws",
              "ends_with",
              "find_in_set",
              "get_json_double",
              "get_json_int",
              "get_json_string",
              "group_concat",
              "instr",
              "lcase",
              "left",
              "length",
              "locate",
              "lower",
              "lpad",
              "ltrim",
              "money_format",
              "null_or_empty",
              "regexp_extract",
              "regexp_replace",
              "repeat",
              "right",
              "split_part",
              "starts_with",
              "strleft",
              "strright"
            ]
          },
          {
            title: "Aggregate Functions",
            directoryPath: "aggregate-functions/",
            children: [
              "avg",
              "bitmap",
              "count",
              "hll_union_agg",
              "max",
              "min",
              "ndv",
              "percentile_approx",
              "stddev",
              "stddev_samp",
              "sum",
              "var_samp",
              "variance"
            ]
          },
          {
            title: "bitmap functions",
            directoryPath: "bitmap-functions/",
            children: [
              "bitmap_and",
              "bitmap_contains",
              "bitmap_empty",
              "bitmap_from_string",
              "bitmap_has_any",
              "bitmap_hash",
              "bitmap_or",
              "bitmap_to_string",
              "to_bitmap"
            ]
          },
          {
            title: "Hash Functions",
            directoryPath: "hash-functions/",
            children: ["murmur_hash3_32"]
          },
          "cast"
        ]
      },
      {
        title: "DDL Statements",
        directoryPath: "sql-statements/",
        children: [
          {
            title: "Account Management",
            directoryPath: "Account Management/",
            children: [
              "CREATE ROLE",
              "CREATE USER",
              "DROP ROLE",
              "DROP USER",
              "GRANT",
              "REVOKE",
              "SET PASSWORD",
              "SET PROPERTY",
              "SHOW GRANTS",
              "SHOW ROLES"
            ]
          },
          {
            title: "Administration",
            directoryPath: "Administration/",
            children: [
              "ADMIN CANCEL REPAIR",
              "ADMIN CHECK TABLET",
              "ADMIN REPAIR",
              "ADMIN SET CONFIG",
              "ADMIN SHOW CONFIG",
              "ADMIN SHOW REPLICA DISTRIBUTION",
              "ADMIN SHOW REPLICA STATUS",
              "ALTER CLUSTER",
              "ALTER SYSTEM",
              "CANCEL DECOMMISSION",
              "CREATE CLUSTER",
              "CREATE FILE",
              "DROP CLUSTER",
              "DROP FILE",
              "ENTER",
              "LINK DATABASE",
              "MIGRATE DATABASE",
              "SHOW BACKENDS",
              "SHOW BROKER",
              "SHOW FILE",
              "SHOW FRONTENDS",
              "SHOW FULL COLUMNS",
              "SHOW INDEX",
              "SHOW MIGRATIONS",
              "SHOW TABLE STATUS"
            ]
          },
          {
            title: "Data Definition",
            directoryPath: "Data Definition/",
            children: [
              "ALTER DATABASE",
              "ALTER TABLE",
              "ALTER VIEW",
              "BACKUP",
              "CANCEL ALTER",
              "CANCEL BACKUP",
              "CANCEL RESTORE",
              "Colocate Join",
              "CREATE DATABASE",
              "CREATE INDEX",
              "CREATE REPOSITORY",
              "CREATE TABLE",
              "CREATE VIEW",
              "create-function",
              "DROP DATABASE",
              "DROP INDEX",
              "DROP REPOSITORY",
              "DROP TABLE",
              "DROP VIEW",
              "drop-function",
              "HLL",
              "RECOVER",
              "RESTORE",
              "show-functions",
              "TRUNCATE TABLE"
            ]
          },
          {
            title: "Data Manipulation",
            directoryPath: "Data Manipulation/",
            children: [
              "BROKER LOAD",
              "CANCEL DELETE",
              "CANCEL LABEL",
              "CANCEL LOAD",
              "DELETE",
              "EXPORT",
              "GET LABEL STATE",
              "GROUP BY",
              "insert",
              "LOAD",
              "MINI LOAD",
              "MULTI LOAD",
              "PAUSE ROUTINE LOAD",
              "RESTORE TABLET",
              "RESUME ROUTINE LOAD",
              "ROUTINE LOAD",
              "SHOW ALTER",
              "SHOW BACKUP",
              "SHOW DATA",
              "SHOW DATABASES",
              "SHOW DELETE",
              "SHOW DYNAMIC PARTITION TABLES",
              "SHOW EXPORT",
              "SHOW LOAD",
              "SHOW PARTITIONS",
              "SHOW PROPERTY",
              "SHOW REPOSITORIES",
              "SHOW RESTORE",
              "SHOW ROUTINE LOAD TASK",
              "SHOW ROUTINE LOAD",
              "SHOW SNAPSHOT",
              "SHOW TABLES",
              "SHOW TABLET",
              "SHOW TRANSACTION",
              "STOP ROUTINE LOAD",
              "STREAM LOAD"
            ]
          },
          {
            title: "Data Types",
            directoryPath: "Data Types/",
            children: [
              "BIGINT",
              "BOOLEAN",
              "CHAR",
              "DATE",
              "DATETIME",
              "DECIMAL",
              "DOUBLE",
              "FLOAT",
              "HLL(HyperLogLog)",
              "INT",
              "SMALLINT",
              "TINYINT",
              "VARCHAR"
            ]
          },
          {
            title: "Utility",
            directoryPath: "Utility/",
            children: ["util_stmt"]
          }
        ]
      }
    ]
  },
  {
    title: "Developer Guide",
    directoryPath: "developer-guide/",
    children: ["debug-tool", "format-code"]
  },
  {
    title: "Apache Commnity",
    directoryPath: "community/",
    children: [
      "gitter",
      "how-to-contribute",
      "members",
      "pull-request",
      "release-process",
      "subscribe-mail-list",
      "verify-apache-release"
    ]
  }
];
