package(default_visibility = ["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
  name = "app2",
  install_source_map_support = False,
  data = [
    ":build.js",
    "@npm2//lodash",
  ],
  entry_point = ":build.js",
)

genrule(
    name = "app2_orchestrator",
    srcs = glob([
        "*",
        "src/**/*",
    ]),
    outs = ["app2_virtual"],
    cmd = "$(location :app2) . && cp -rf . $(OUTS)",
    local = 1,
    message = "Building Dev server",
    tools = [":app2"],
)