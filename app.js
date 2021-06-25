class Product {
	constructor(name, price, year) {
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI {
	addProduct(product) {
		const productList =
			document.getElementById(
				'product-list'
			);
		const element =
			document.createElement('div');
		element.innerHTML = `
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong> Nombre del Producto</strong>: ${product.name}<strong>, Precio del producto</strong>: ${product.price}<strong>, Año del producto</strong>: ${product.year}
					<a href="#" class="btn btn-danger ml-2 btn-sm" name="delete" id="delete">Eliminar Producto</a>
				</div>
			</div>
		`;
		productList.appendChild(element);
	}

	formReset() {
		document
			.getElementById('product-form')
			.reset();
	}

	deleteProduct(element) {
		if (element.name === 'delete') {
			element.parentElement.parentElement.parentElement.remove();
			this.showMessage(
				'Producto Eliminado Satisfactoriamente',
				'warning'
			);
		}
	}

	showMessage(message, cssClass) {
		const div =
			document.createElement('div');
		div.className = `alert alert-${cssClass} mt-2 mb-2 p-2 italic`;
		div.appendChild(
			document.createTextNode(message)
		);

		//! Showing in the DOM //
		const container =
			document.querySelector('.container');
		const app =
			document.querySelector('#app');
		container.insertBefore(div, app);
		setTimeout(function () {
			document
				.querySelector('.alert')
				.remove();
		}, 2250);
	}
}

///? DOM Events ///

document
	.getElementById('product-form')
	.addEventListener(
		'submit',
		function (event) {
			const productName =
				document.getElementById(
					'name'
				).value;
			const productPrice =
				document.getElementById(
					'price'
				).value;
			const productYear =
				document.getElementById(
					'year'
				).value;

			const product = new Product(
				productName,
				productPrice,
				productYear
			);

			const ui = new UI();

			// if (
			// 	name === "" ||
			// 	price === "" ||
			// 	year === ""
			// ) {
			// 	ui.showMessage(
			// 		'Porfavor rellene todos los datos',
			// 		'danger'
			// 	);
			// }

			ui.addProduct(product);

			ui.showMessage(
				'Producto Agregado Satisfactoriamente',
				'success'
			);

			ui.formReset();

			event.preventDefault();
		}
	);

document
	.getElementById('product-list')
	.addEventListener(
		'click',
		function (event) {
			const ui = new UI();
			ui.deleteProduct(event.target);
		}
	);
