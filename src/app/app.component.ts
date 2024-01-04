import { Component, OnInit } from '@angular/core';
import '@fortawesome/fontawesome-free/js/all.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'projeto-dashboard';

  ngOnInit(): void {
    this.mesclarListas([
      { id: 1, nome: "Alice", idade: 25 },
      { id: 2, nome: "Bob", idade: 30 }
  ], [
    { id: 1, profissao: "Engenheira" },
    { id: 3, profissao: "Desenvolvedor" }
  ]);

  console.log(this.removerDuplicados([1, 2, 3, 4, 2, 5, 6, 1, 5, 5, 2, 1, 7, 2]));

    this.ordenarPorSalario([
      { nome: "Alice", idade: 25, salario: 50000 },
      { nome: "Bob", idade: 30, salario: 60000 },
      { nome: "Charlie", idade: 22, salario: 45000 }
  ])

    this.filtrarPorCategoria([
      { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
      { nome: "Camiseta", preco: 50, categoria: "Vestuário" },
      { nome: "Fone de Ouvido", preco: 100, categoria: "Eletrônicos" },
      { nome: "Tênis", preco: 120, categoria: "Vestuário" }
  ], "Eletrônicos")
  
    this.totalDeVendasPorCategoria([
      { produto: "Notebook", valor: 3000, categoria: "Eletrônicos" },
      { produto: "Camiseta", valor: 50, categoria: "Vestuário" },
      { produto: "Fone de Ouvido", valor: 100, categoria: "Eletrônicos" },
      { produto: "Tênis", valor: 120, categoria: "Vestuário" },
      { produto: "Mouse", valor: 50, categoria: "Eletrônicos" }
  ]);
  }

  mesclarListas(obj1: any, obj2: any){
    let listaMesclada: any = [];

    listaMesclada.push(...obj1);
    
    obj2.forEach((element: any) => {

     let objeto = listaMesclada.find((obj: any) => element.id == obj.id);

    if (objeto){
      Object.assign(objeto, element);
    } else {
      listaMesclada.push(element);
    }
      
    });

    console.log(listaMesclada);
  }

  removerDuplicados(array: any){
    let index;
    let arraySemRepetidos = array;
    
    array.forEach((element: any) => {
      index = array.indexOf(element);
      
      for (let i = 0; i < array.length; i++){
        if (array[i] == array[index] && i != index){
          arraySemRepetidos.splice(i, 1);
        }
      }
    });

    return arraySemRepetidos;
  }

  removerDuplicados2(array: any){
    const conjunto = new Set(array);
    const arraySemRepetidos = [...conjunto];
    console.log(arraySemRepetidos);

  }

  ordenarPorSalario(cadastros: any){
    return cadastros.sort((a: any, b: any) => b.salario - a.salario);
  }
  
  filtrarPorCategoria(produtos: any, categoria: any){
    let produtosFiltrados: any = [];
    
    produtos.forEach((element: any) => {
      if (element.categoria == categoria){
        produtosFiltrados.push(element);
      }
    });

    return produtosFiltrados
  }

  totalDeVendasPorCategoria(vendas: any){
    let indexOfCategory;
    let arrayVendas: any = [];

    vendas.forEach((element: any) => {
      let sumVendasPorCategoria = element.valor;

      indexOfCategory = vendas.indexOf(element);

      let obj = {
        vendas: element.valor,
        categoria: element.categoria
      }

      if (indexOfCategory < vendas.length){
        for (let i = indexOfCategory + 1; i < vendas.length; i++){
          if (vendas[i].categoria == vendas[indexOfCategory].categoria){
            console.log(vendas[i].valor);
            sumVendasPorCategoria = sumVendasPorCategoria + vendas[i].valor;
            
            vendas.splice(i, 1);
            i--;
          }
        }

        obj.vendas = sumVendasPorCategoria;
        arrayVendas.push(obj);
        sumVendasPorCategoria = 0;
      } else {
        vendas.find((obj: any) => obj.categoria == element.categoria);

        if (vendas){
          arrayVendas.push(obj);
        }
      }
      
    });

    return arrayVendas;
  }
}
