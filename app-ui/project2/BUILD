load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
  name = "app",
  install_source_map_support = False,
  data = [
    "run.js",
    "@npm//lodash",
  ],
  entry_point = "run.js",
)