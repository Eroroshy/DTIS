export const paseLista = (alumnos: any[]) => {
    const salon = alumnos;

    for (let i = 0; i < salon.length; i++) {
        const alumno = salon[i];
        console.log(alumno.nombre);
        console.log(`c: ${alumno.carrera}`);
    }
};