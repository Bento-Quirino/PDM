// Typescript é um superset do Javascript, usado para tipar variáveis e funções
// Ele se torna javascript quando transpilado
// Transpiler: converte uma linguagem para outra

interface Interest {
    title: string
    description: string
}

interface Friends {
    id: number
    name: string
}

type Bio = {
    profilePicture: string
    description: string
    interests: Interest[]
}

interface Person extends Bio { // interface pode ser extendida com outras interfaces e types
    id: number
    name: string
    age: number
    email: string
    phone: string
    relationshipStatus: 'single' | 'married' | 'divorced' | 'dating'  // union type "enum"
    friends: Friends[] // array de Friends
}

// A diferença entre type e interface é que a interface pode ser extendida