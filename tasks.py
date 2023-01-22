import subprocess
from pathlib import Path
import os

from invoke import task

root_dir = Path(__file__).parent.absolute()


@task(aliases=["pc"])
def pre_commit(c, target="tasks.py"):
    with c.cd(str(root_dir)):
        c.run(f"black {target}")
        c.run(f"isort {target}")
        c.run(f"flake8 {target}")

@task
def get_antlr(c):
    antlr_dir = root_dir / "tools"
    subprocess.call(f"wget https://www.antlr.org/download/antlr-4.11.1-complete.jar", shell=True, cwd=antlr_dir)

@task
def generate_lexer(c):
    antlr_dir = root_dir / "tools"
    jar_name = "antlr-4.11.1-complete.jar"
    jar_path = antlr_dir / jar_name
    my_env = os.environ.copy()
    my_env["CLASSPATH"] = str(jar_path.absolute())
    g4_dir = root_dir / "src/antlr/grammar/CalcLexer.g4"
    out_dir = root_dir / "src/antlr/generated"
    subprocess.call(f"java org.antlr.v4.Tool -Dlanguage=JavaScript -o {out_dir} {g4_dir}", shell=True, cwd=antlr_dir, env=my_env)


@task
def generate_parser(c):
    antlr_dir = root_dir / "tools"
    jar_name = "antlr-4.11.1-complete.jar"
    jar_path = antlr_dir / jar_name
    my_env = os.environ.copy()
    my_env["CLASSPATH"] = str(jar_path.absolute())
    g4_dir = root_dir / "src/antlr/grammar/CalcParser.g4"
    out_dir = root_dir / "src/antlr/generated"
    subprocess.call(f"java org.antlr.v4.Tool -Dlanguage=JavaScript -no-listener -no-visitor -o {out_dir} {g4_dir}", shell=True, cwd=antlr_dir, env=my_env)