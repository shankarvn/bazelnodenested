genrule(
    name = "app_ui",
    outs = ["status.txt"],
    cmd = "echo 'Overall build completed successfully' > $@",
    message = "Building ui",
    tools = [
        "//project1:app1_orchestrator",
        "//project2:app2_orchestrator"
    ],
)