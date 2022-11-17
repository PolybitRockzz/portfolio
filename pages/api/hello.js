// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Swastik Biswas',
    internet_name: 'Polybit',
    projects: [
      {
        name: 'Coffee IDE for Java Developers',
        version: '0.1.1'
      }
    ]
  })
}
