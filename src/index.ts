export interface Ref<Type> {
    value: Type
}

export function Deref<Type>(ref: Ref<Type>): Type {
    return ref.value;
}

export function Ref<Type>(value: Type): Ref<Type> {
    return { value }
}
