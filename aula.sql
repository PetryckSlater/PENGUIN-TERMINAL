-- Tabela para armazenar informações dos usuários registrados por email
CREATE TABLE UsuariosEmail (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    Senha VARCHAR(100) -- A senha seria criptografada na prática, mas por simplicidade será uma string aqui
);
    Origem VARCHAR(100)
-- Tabela para armazenar informações dos usuários registrados pelo Google
CREATE TABLE UsuariosGoogle (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    GoogleID VARCHAR(100) -- ID fornecido pelo Google para identificar o usuário
);

-- Tabela para armazenar informações dos usuários registrados pelo Facebook
CREATE TABLE UsuariosFacebook (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    FacebookID VARCHAR(100) -- ID fornecido pelo Facebook para identificar o usuário
);
-- o professor sugeriu fazer uma tabela so , mas com uma coluna amais com a origem do login , como por exemplo:
--origem Gooogle -> se google ai coloca o google id, nao sei explicar melhorque isso' 