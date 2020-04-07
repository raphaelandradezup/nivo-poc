const dataBase = [
    { id: '1', rating: "TRANSFORMADOR" },
    { id: '2', rating: "EVOLUTIVO_RAPIDO" },
    { id: '3', rating: "EVOLUTIVO_LENTO" },
    { id: '4', rating: "NAO_EVOLUTIVO" },
    { id: '5', rating: "NAO_SEI_AVALIAR" }
]

export const labels = {
    TRANSFORMADOR: 'Transformador',
    EVOLUTIVO_RAPIDO: 'Evolutivo Rápido',
    EVOLUTIVO_LENTO: 'Evolutivo Lento',
    NAO_EVOLUTIVO: 'Não Evolutivo',
    NAO_SEI_AVALIAR: 'Não sei Avaliar'
}

export const pieData = () => {
    const value = [40, 10, 5, 25, 20]

    return dataBase.map((dt, idx) => ({
        id: dt.id,
        value: value[idx],
        label: labels[dt.rating]
    }))
}

export const barData = [
    {
        month: 'jan',
        TRANSFORMADOR: 40,
        EVOLUTIVO_RAPIDO: 10,
        EVOLUTIVO_LENTO: 5,
        NAO_EVOLUTIVO: 25,
        NAO_SEI_AVALIAR: 20
    },
    {
        month: 'fev',
        TRANSFORMADOR: 10,
        EVOLUTIVO_RAPIDO: 10,
        EVOLUTIVO_LENTO: 8,
        NAO_EVOLUTIVO: 47,
        NAO_SEI_AVALIAR: 25
    },
    {
        month: 'mar',
        TRANSFORMADOR: 15,
        EVOLUTIVO_RAPIDO: 15,
        EVOLUTIVO_LENTO: 50,
        NAO_EVOLUTIVO: 20,
        NAO_SEI_AVALIAR: 1
    }
]

export const lineData = [
    {
        id: 'Transformador',
        data: [
            { x: undefined, y: null },
            { x: '2019 Nov', y: 5 },
            { x: '2019 Dez', y: 35 },
            { x: '2020 Jan', y: 40 },
            { x: null, y: undefined }
        ]
    }
]