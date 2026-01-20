export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito: number) {
        if(valorDoDeposito <= 0) {
            throw new Error("O valor do depósito deve ser maior que zero.");
        }
        if(valorDoDeposito > this.saldo){
            throw new Error("Saldo insuficiente para realizar a operação.");
        }
        return originalMethod.apply(this, [valorDoDeposito])
        }
        return descriptor;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito: number) {
        if(valorDoDeposito <= 0) {
            throw new Error("O valor do depósito deve ser maior que zero.");
        }
        return originalMethod.apply(this, [valorDoDeposito])
    }
    return descriptor;
}