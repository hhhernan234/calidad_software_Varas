# COMANDOS GIT

## Configuraciones básicas globales
git config --global user.name "hhhernan234"
git config --global user.email "varashernan9@gmail.com"
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global init.defaultBranch main

## Consultar configuraciones
git config --list
git config user.name
git config user.email

## Estado del git
git status
git status -s

## Incluir al Stage
git add
git add archivo_especifico.py

## Comprometer cambios
git commit -m "Comentario"

## Subir a git
git push origin rama

## Consultar Logs
git log
git log --console
git log --oneline
git log --oneline --graph --all
git log --stat
git log -p
git log -5
git log --oneline -10
git log --author="varashernan9@gmail.com"
git log --after="2026-01-01"

### Por fecha
git log --before="2026-04-01"
git log --after="2026-01-01" --before="2026-04-01"
git log .\main.py    ##Commit archivo especifico

## Modificar el último commit
git commit --amend -m "feat: modificado"

## Restaurar git anteriores
git reset --soft HEAD~1
git reset --hard HEAD~1