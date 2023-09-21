

## Configurar o Servidor __NFS__

obs: Sistema Operacional Linux/Ubuntu

### Instalar o NFS no servidor:

`sudo apt-get install nfs-kernel-server`

### Configurar as exportações NFS:

Edite o arquivo `/etc/exports` para definir as exportações NFS.

`sudo nano /etc/exports`

`sudo mkdir /mnt/compartilhado`

`cd /mnt/compartilhado`

`chmod 777 .`

Adicionar linha seguinte linha

`/mnt/compartilhado *(rw,sync,no_root_squash)`

### Reiniciar o serviço NFS:

`sudo systemctl restart nfs-kernel-server`

### Configurar os cliente NFS

Instalar o pacote NFS no cliente:

`sudo apt-get install nfs-common`

Montar o compartilhamento NFS:

`sudo mkdir /mnt/acesso`

`sudo mount ip_nfs_server_in_network:/mnt/compartilhado /mnt/acesso`

`sudo mount 192.168.1.111:/mnt/compartilhado /mnt/acesso`

`mount`


Link do vídeo sobre NFS:

https://youtu.be/2U5YURc6kMY?si=jksFFr5TwKvOyBwU