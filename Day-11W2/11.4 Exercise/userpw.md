Last updated on 18 Feb 2017


Open Terminal and execute the following command to set the root password:
mysqladmin -u root password 'hplanet'

Install MySQL on OS X El Capitan

Normally the installation of MySQL can be achieved with a single command, which executes a script provided by MacMiniVault : bash <(curl -Ls http://git.io/eUx7rg)

However, at the time of writing the script is not compatible with OS X El Capitan (10.11)

Install MySQL using Homebrew

An alternative to the aforementioned installation script is installing MySQL using Homebrew. This gist assumes you already have Homebrew installed, if not first read the article "Homebrew and El Capitan"

Make sure Homebrew has the latest formulae, so run brew update first
-OR- make sure Homebrew has MySQL version 5.7.17 as default formulae in its main repository :

Enter the following command : brew info mysql
Expected output: mysql: stable 5.7.17 (bottled)
Next install MySQL with : brew install mysql

Additional configuration

Open Terminal and execute the following commands :

To have launchd start mysql at login :
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
To load mysql immediately :
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
Finally add the mysql directory to your PATH environment variable in .bash_profile :
export MYSQL_PATH=/usr/local/Cellar/mysql/5.7.17  
export PATH=$PATH:$MYSQL_PATH/bin
Reload shell and type mysql -v to confirm
Expected output : Server version: 5.7.17 Homebrew
Quit the mysql CLI via mysql> \q
Configure MySQL

Open Terminal and execute the following command to set the root password:
mysqladmin -u root password 'yourpassword'

Important : Use the single ‘quotes’ to surround the password and make sure to select a strong password !

Database Management

To manage your databases, I recommend using Sequel Pro, a MySQL management tool designed for OS X

___________________________________________________________________________________________________________________


export MYSQL_PATH=/usr/local/Cellar/mysql/5.7.17
export PATH=$PATH:$MYSQL_PATH/bin

___________________________________________________________________________________________________________________

Creating a .bash_profile on your mac

March 18, 2009
Patrick
A typical install of OS X won't create a .bash_profile for you. When you want to run functions from your command line, this is a must-have.

Start up Terminal
Type "cd ~/" to go to your home folder
Type "touch .bash_profile" to create your new file.
Edit .bash_profile with your favorite editor (or you can just type "open -e .bash_profile" to open it in TextEdit.
Type ". .bash_profile" to reload .bash_profile and update any functions you add.



If node could not find it - you need to brew link --overwrite node
Execute this list of commands in this particular order:

sudo brew uninstall node
brew update
brew upgrade
brew cleanup
brew install node
sudo chown -R $(whoami) /usr/local
brew link --overwrite node
brew postinstall node
