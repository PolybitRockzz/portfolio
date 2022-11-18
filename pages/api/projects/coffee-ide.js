// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      name: 'Coffee IDE for Java Developers',
      version: '0.1.1',
      whats_new: [
        '+ String highlighting',
        '+ Light theme',
        '+ Settings Dialog',
        '- Appdata Folder Bug Fixed'
      ],
      download: 'https://github.com/PolybitRockzz/coffee-java-ide/releases/download/v0.1.1-alpha/coffee_ide_0.1.1_installer.exe'
    })
  }
  