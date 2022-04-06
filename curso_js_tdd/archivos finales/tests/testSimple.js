import chai from 'chai';
import { getYear, gethola } from '../controllers/helpers';
import {expect} from 'chai';

import IndexController from '../controllers/indexController';


describe('Helpers', () => {
    // testea el método getYear
    describe('Test getYear function', () => {
        let year, myYear;
        before(() => {
            console.log('Cargando valores');
            year = getYear();
            myYear = new Date().getFullYear();
        });
        after(() => {
            console.log('Ejecutando after');
        });
        it('Devuelve un número', () => {
            expect(year).to.be.a('number');
        })
        it('Devuelve el año en curso', () => {
            expect(year).to.be.equal(myYear);
        })
        it('Otras comparaciones', () => {
            expect(year).to.be.at.most(myYear + 1);
            expect(year).to.be.at.least(myYear - 1);
            expect(year).to.be.within(1970, 2100);
            expect(year).not.to.be.NaN;
        })
    });

    // testea el método gethola
    describe('Test gethola function', () => {
        const saludo = gethola();
        it('Devuelve un string', () => {
            expect(saludo).to.be.a('string');
        })
        it('Devuelve un hola', () => {
            expect(saludo).to.have.string('Hola');
            expect(saludo).to.not.have.string('Adios');
        })
    });

    // testea el método gethola
    describe('Test tipos de datos', () => {
        it('Comparando tipos', () => {
            const obj = {};
            expect(obj).to.be.a('Object');
            expect(obj).to.not.be.a('Array');

            let _null;
            expect(_null).to.be.undefined;
            _null = null;
            expect(_null).to.be.null;
        })
        it('Comparando objetos', () => {
            const obj1 = {name: 'Jorge'};
            const obj2 = {name: 'Jorge'};
            expect(obj1).to.have.property('name');
            expect(obj1).to.deep.equal(obj2);
            expect(obj1).to.have.keys(['name']);
            expect(obj1).to.have.any.keys(['name']);
            expect(obj1).to.have.all.keys(['name']);

            expect(obj1).to.be.instanceOf(Object);
            const instancia = new IndexController();
            expect(instancia).to.be.instanceOf(IndexController);
        })
        it('Comparando errores', () => {
            const generaError = () => {
                throw new TypeError('Error de DB');
            }
            expect(generaError).to.throw();
            expect(generaError).to.throw(TypeError);
            expect(generaError).to.throw('DB');
            const error = new TypeError('Error de DB');
            error.code = 500;
            const generaError2 = () => {
                throw error;
            }
            expect(generaError2).to.throw(error);
            expect(generaError2).to.throw(TypeError).with.property('code', 500);
        })
    });
});
