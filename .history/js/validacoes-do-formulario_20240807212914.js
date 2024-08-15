export const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

export const mensagensDeErro = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha seu nome completo somente com letras.",
        tooShort: "Por favor, preencha seu nome completo com mais de 5 caracteres."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    telefone: {
        valueMissing: "O campo de telefone não pode estar vazio.",
        patternMismatch: "Seu telefone deve ser um número válido.",
        tooShort: "O telefone ultrapassou o número máximo de caracteress."
    },
    cep: {
        valueMissing: 'O campo de cep não pode estar vazio.',
        patternMismatch: "Por favor, preencha um Cep válido.",
        customError: "O Cep digitado não existe.",
        tooShort: "O campo de Cep não tem caractéres suficientes."
    },
    endereco: {
        valueMissing: 'O campo de endereço não pode estar vazio.',
        patternMismatch: "Por favor, preencha um endereço válido.",
        customError: "O endereço digitado não existe.",
        tooShort: "O campo de endereço não tem caractéres suficientes."
    },
    bairro: {
        valueMissing: 'O campo bairro não pode estar vazio.',
        patternMismatch: "Por favor, preencha um bairro válido.",
        customError: "O bairro digitado não existe.",
        tooShort: "O campo bairro não tem caractéres suficientes."
    },
    cidade: {
        valueMissing: 'O campo cidade não pode estar vazio.',
        patternMismatch: "Por favor, preencha um cidade válido.",
        customError: "O cidade digitado não existe.",
        tooShort: "O campo cidade não tem caractéres suficientes."
    },
    estado: {
        valueMissing: 'O campo estado não pode estar vazio.',
        patternMismatch: "Por favor, preencha um estado válido.",
        customError: "O estado digitado não existe.",
        tooShort: "O campo estado deve conter 2 dígitos."
    },
    mensagem: {
        valueMissing: 'O campo mensagem não pode estar vazio.',
        patternMismatch: "Por favor, caracteres inseridos não são válidos.",
        tooShort: "O campo mensagem não tem caractéres suficientes."
    },

    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    },
    tipo_contato: {
        valueMissing: 'Você precisa escolher um meio para ser contactado.',
    },

    inscricao: {
        valueMissing: "O campo de e-mail de inscrição não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email de inscrição válido.",
        tooShort: "Por favor, preencha um email de inscrição válido."
    },
}