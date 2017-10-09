# Ruby

#### Requirements
* Ruby 2.4.0

#### Usage

```
# multiple files as args
./ruby/script.rb files/file1.txt files/file2.txt files/file3.txt
5 the white house
4 said in a
...

# single file as args
./ruby/script.rb files/file1.txt
3 of behavioral economics
2 work in behavioral
...

# stdin
cat files/file3.txt | ./ruby/script.rb
2 here we are
2 a house he
...

# errors and exits if there's no stdin and no args
./ruby/script.rb
Error requires stdin or args

# can process 20_000 leagues under the sea
./ruby/script.rb files/large.txt
130 of the nautilus
83 of the sea
..
```

# JS
#### Requirements
  * `brew install node`
  * `nvm use` ( Should load 8.5.0 via `.nvmrc` )
    * I manage node versions with nvm,  [see here](https://github.com/creationix/nvm)

#### Usage
```
# multiple files as args
./js/index.js files/file1.txt files/file2.txt
5 - the white house
4 - said in a
...

# single file as an arg
./js/index.js files/file1.txt
3 - of behavioral economics
2 - field of behavioral
...

# stdin
cat files/file3.txt | ./js/index.js
2 - here we are
2 - we are united
...

# no args and no stdin will throw
./js/index.js
..
Error: requires stdin or args

# can process 20000 leagues under the sea:
./js/index.js files/large.txt
130 - of the nautilus
83 - of the sea
73 - surface of the
```

#### Notes

* most test data was taken from http://thin.npr.org/
* js implementation is slightly faster for parsing the large text ( via `time` )
* Might need to `chmod 775` both scripts
