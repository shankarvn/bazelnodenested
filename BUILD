genrule(
    name = "app_ui",
    outs = ["status.txt"],
    cmd = "echo 'Overall build completed successfully' > $@",
    message = "Building ui",
    tools = [
        "//app-ui/project1:app1",
        "//app-ui/project2:app2"
    ],
)