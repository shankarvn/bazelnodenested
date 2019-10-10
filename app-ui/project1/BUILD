package(default_visibility = ["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
  name = "app1",
  install_source_map_support = False,
  data = [
    ":build.js",
    "@npm1//lodash",
  ],
  entry_point = ":build.js",
)