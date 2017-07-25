var $esriHeader = 'object' === typeof esriHeader ? esriHeader.create({
	theme: 'web',
	brand: {
		label: 'Esri',
		image: [
			'M75.364 8.354h3.892v15.572h-3.892zM43.91 19.55c-.916.964-2.092 1.65-3.78 1.65-2.175 0-3.927-1.397-4.187-3.698h11.874v-1.07c0-5.42-2.95-8.467-7.302-8.467-4.701 0-8.464 3.275-8.464 8.174 0 4.899 3.763 8.177 8.464 8.177 2.146 0 4.166-.667 5.852-2.31l-2.456-2.457zm-3.944-8.667c2.433 0 3.926 1.429 3.96 3.699h-7.983c.293-2.24 1.721-3.7 4.023-3.7zm13.281 1.85c0-1.168 1.234-1.655 2.273-1.655 1.321 0 2.293.547 3.038 1.577l2.476-2.474c-1.282-1.6-3.407-2.216-5.418-2.216-3.147 0-6.262 1.555-6.262 5.028 0 5.938 8.402 3.406 8.402 6.618 0 1.232-1.459 1.783-2.594 1.783-1.65 0-2.687-.805-3.69-1.905l-2.515 2.514c1.579 1.711 3.62 2.313 5.978 2.313 3.178 0 6.717-1.298 6.717-4.997 0-6.068-8.405-3.796-8.405-6.586zm20.144-4.545c-.45-.127-.901-.223-1.383-.223-2.045 0-3.765 1.07-4.61 2.852h-.062V8.354h-3.893v15.572h3.893v-8.34c0-.842.518-3.925 4.185-3.925.564 0 1.127.113 1.718.253l.152-3.726zM77.278.5c1.48 0 2.622 1.072 2.622 2.488 0 1.419-1.143 2.491-2.622 2.491-1.48 0-2.554-1.177-2.554-2.49C74.724 1.674 75.798.5 77.278.5zM14.682 2.766c-1.217-.037-1.932.12-2.65.26-.217-.056-.621.003-.644.472 0 .252.08.447.24.562.16.114 1.493 1.1 2.473 2.142-.47.052-.98.138-1.504.247-.585-1.265-2.465-.115-3.714-.065-.146.006-.286.025-.431.035-.137-1.056-.235-2.15-.21-2.92 1.618-.917 4.748-1.593 6.875-1.626l.372-.01c.312-.003.337-.251.043-.291-2.641-.361-4.929.173-7.278 1.145C5.808 3.748 2.696 6.12.799 10.597c-.444 1.247-2.219 7.194.935 12.299 2.56 4.143 5.856 6.113 9.887 6.677 4.024.56 6.207.074 8.752-1.056 5.952-2.642 10.496-12.559 5.95-19.747-1.794-3.319-6.495-6.229-11.64-6.004zm-2.259 4.647a17.754 17.754 0 0 1 2.362-.368 15.741 15.741 0 0 1 1.748 2.54c-.805.39-1.878.688-2.315 1.313-.181.259-.225.612-.231.994a23.59 23.59 0 0 0-3.878 1.286c-.453-1.332-.85-2.659-1.124-3.842 1.297-1.237 2.814-1.438 3.438-1.923zm6.61 15.88c-.354.038-.706.083-1.016.131-.77.12-1.761.378-2.684.722-.53-.843-1.95-2.89-2.668-4.436 1.442-.71 3.457-1.304 5.775-1.445.19.33.4.66.691.956.756.774-.442 1.883-.097 4.073zm-8.603-9.14a19.41 19.41 0 0 1 3.56-1.286c-.008.333-.045.65-.182.903-.196.366-.106 1.428.134 1.775.755 1.099 2.008.488 2.952.884.432.18.72.481.963.839-1.974.124-3.91.584-5.705 1.41-.924-1.96-1.722-4.524-1.722-4.524zm.833 4.938c-.07.033-.146.074-.218.11a40.805 40.805 0 0 0-3.256-.78c-.995-.203-1.031-.15-2.151.176-.16.046-.313.087-.462.132a36.17 36.17 0 0 1-.445-1.202c1.436-1.106 2.884-2.034 4.822-2.985.498 1.491 1.214 3.484 1.71 4.549zm.767 4.529c.294-.765.521-1.332.605-1.89.569.957 1.248 1.999 1.774 2.814-.819.398-1.771 1.01-2.672 1.686.062-1.037.083-2.065.293-2.61zm5.334-14.637c-.01.015-.028.026-.039.04a23.057 23.057 0 0 0-1.377-2.111c1.007-.061 2.246-.008 3.374.108-1.014.363-1.46 1.254-1.958 1.963zm-9.028 1.094c.019-.026.039-.047.058-.072.233 1.182.512 2.16.885 3.518-1.402.618-3.881 2.148-4.976 2.972-.198-.502-.404-1.214-.589-1.946.249-.737.758-1.254 1.476-1.325 1.228-.123 2.28-1.95 3.146-3.147zm-5.41-1.784C4.24 6.455 6.023 4.666 7.65 3.773c-.016.4.086 1.567.218 2.693-.57.057-1.134.128-1.692.211a12.084 12.084 0 0 0-3.115 4.088c-.117-1.053-.178-1.933-.133-2.472zM2.07 9.731s.062 1.06.113 1.833c0 0-.781.886-1.18 1.591.159-1.444.498-2.188 1.067-3.424zm7.664 18.357c-4.046-1.269-7.044-4.678-8.113-8.254a17.475 17.475 0 0 1-.651-6.473c.056.01.186.072.38.017.135-.092.616-.43.958-.728.004.04.012.09.017.132-.23.869-.371 1.775-.4 2.71.37.39.804 1.037 1.286 1.706-.31.23-.905.642-1.045.741-.41.292-.406.753-.114 1.015.161.144.492.085.613-.01.358-.285.656-.513 1.066-.77.15.394.292.748.43 1.086-.175.188-.3.436-.342.799-.135 1.172.979 2.09 1.918 2.36.035.01.061.013.094.023.05.075.095.146.148.223-.487.378-.82.765-1.049 1.063-.132.172-.28.43-.16.481.123.05.535 0 .719-.034.466-.09.826-.606 1.148-.795.387.533 1.017 1.22 1.672 1.88.029.119.055.245.088.35.125.404.293.804.495 1.197.472.219.962.402 1.464.56a8.344 8.344 0 0 0-.622.72zm.99.312c.154-.202.31-.454.504-.626.468.31.969.665 1.368.894-.615-.07-1.337-.084-1.873-.268zm3.112.31s-1.604-1.062-2.009-1.47c.803-.668 2.102-1.46 3.128-1.89.402.631 1.727 2.507 2.258 3.112-.963.168-2.31.294-3.377.248zm6.706-1.508c-.287.188-1.665.813-2.205.987a23.43 23.43 0 0 1-2.44-3.201c.844-.354 2.143-.671 3.346-.821.11.343.25.704.444 1.094.191.382.412.662.649.853.085-.053.164-.115.248-.17-.006.42-.017.846-.042 1.258zM20.21 5.724c-.27-.172-.607-.108-.467.193.053.117.259.314.427.512-.986-.272-3.608-.478-4.856-.364-.815-.916-1.744-2.028-2.861-2.765 4.999-.311 9.49 1.757 11.474 4.186-.662-.344-2.088-.833-2.668-.963-.313-.319-.707-.58-1.05-.8zm1.095 21.066c.023-.408.04-.923.052-1.397.487-.378.946-.79 1.37-1.237.547.063 1.094.155 1.427.238-.74.938-1.762 1.718-2.85 2.396zm3.824-3.725c-.12.253-.428.688-.633.894-.312-.126-.781-.258-1.272-.374.079-.094.164-.183.24-.28.268-1.795-.338-2.37.42-4.014l.172-.37c.418.118.812.247 1.153.385.044.616.04 2.729-.08 3.759zm-.708-4.916c.196-.408.412-.84.646-1.271.06.548.104 1.081.13 1.563a9.254 9.254 0 0 0-.776-.292zm2.218 1.125l-.194.757c-.136.514-.593 1.731-.832 2.222.091-.663.172-2.384.149-2.73.16.05.501-.146.558-.34.057-.195-.564-.496-.564-.496a20.742 20.742 0 0 0-.172-2.7c.143-.23.287-.452.434-.655a12.082 12.082 0 0 0-.185-1.574c.124.04.24.073.323.074.282.005.282-.19.191-.298-.058-.07-.328-.238-.642-.42a12.02 12.02 0 0 0-2.781-5.32c.533.202 1.214.48 1.754.774.41.516 1.585 1.675 2.212 4.92.564 2.922-.059 5.143-.251 5.786z'
		],
		href: 'https://www.esri.com/',
		width: 80,
		height: 30
	},
	menus: [
		[
			{
				label: 'ArcGIS',
				menus: [
					{
						label: 'About ArcGIS',
						href: 'https://www.esri.com/arcgis/about-arcgis',
						data: {
							this: true,
							that: true,
							other: true,
							thing: true
						},
						newContext: true
					},
					{
						label: 'Products',
						href: 'https://www.esri.com/products'
					},
					{
						label: 'Services',
						href: 'https://www.esri.com/arcgis/services'
					},
					{
						label: 'ArcGIS for Developers',
						href: 'https://developers.arcgis.com'
					},
					{
						label: 'What is GIS?',
						href: 'https://www.esri.com/what-is-gis'
					},
					{
						label: 'Store',
						href: 'https://store.esri.com'
					},
					{
						label: 'Free Trial',
						href: 'https://www.esri.com/arcgis/trial'
					}
				],
				tiles: [
					{
						label: 'ArcGIS Pro',
						href: 'https://www.esri.com/arcgis/products/arcgis-pro/Overview',
						icon: [
							'M15 36.1h-2.1v-3.2H15v-.8H1.5a.6.6 0 0 1-.6-.6v-26a.6.6 0 0 1 .6-.6h38a.6.6 0 0 1 .6.6V23h.8V5.5a1.401 1.401 0 0 0-1.4-1.4h-38A1.401 1.401 0 0 0 .1 5.5v26a1.401 1.401 0 0 0 1.4 1.4h10.6v3.2H8v.8h7z',
							'M43.9 41.1V26.5a1.401 1.401 0 0 0-1.4-1.4h-24a1.401 1.401 0 0 0-1.4 1.4v14.6h-3V43a1.902 1.902 0 0 0 1.9 1.9h29a1.902 1.902 0 0 0 1.9-1.9v-1.9zm-26-14.6a.6.6 0 0 1 .6-.6h24a.6.6 0 0 1 .6.6v14.6h-1.2v-14H19.1v14h-1.2zm2 14.6V27.9h21.2v13.2zM46.1 43a1.101 1.101 0 0 1-1.1 1.1H16a1.101 1.101 0 0 1-1.1-1.1v-1.1h13.164A1.495 1.495 0 0 0 29.5 43h3a1.492 1.492 0 0 0 1.433-1.1H46.1z',
							'M34 30.9h2.884l-5.736 5.089-4.214-3.029-4.239 4.981.61.518 3.761-4.419 4.135 2.971 5.899-5.233V34h.8v-3.9H34v.8zm3.9-7.9V7.1H3.1v22.8H15v-.8h-1.546c-.021-.08-.04-.152-.044-.136a1.58 1.58 0 0 1 .462-.86 2.677 2.677 0 0 0 .486-.763 1.466 1.466 0 0 0-.056-.93 1.807 1.807 0 0 1-.099-.5c0-1.054-1.089-1.308-1.884-1.494-.356-.083-.894-.21-.97-.362-.398-.796-.04-1.212.628-1.878a2.653 2.653 0 0 0 1.03-1.831c0-.572-.31-1.512-1.137-1.595a2.261 2.261 0 0 0-1.157.19 1.825 1.825 0 0 1-.738.166c-.298 0-.618-.175-.618-.436a1.857 1.857 0 0 1 .31-.918 2.578 2.578 0 0 0 .407-1.298 3.17 3.17 0 0 0-.132-.85 2.413 2.413 0 0 1-.106-.645 1.044 1.044 0 0 1 .976-1.098c.477 0 .705.368 1.086 1.05a1.876 1.876 0 0 0 1.786.925c1.377 0 2.255-1.584 2.255-2.675a.707.707 0 0 1 .619-.736 1.176 1.176 0 0 1 .715.338 1.923 1.923 0 0 0 1.199.5c.98 0 1.386-.72 1.745-1.356a2.536 2.536 0 0 1 .899-1.087A2.644 2.644 0 0 0 22.31 7.9H37.1v9.362c-.116.067-.236.133-.343.201a1.916 1.916 0 0 1-1.076.414c-.164 0-.335-.012-.511-.024a4.623 4.623 0 0 0-1.42.07c-.321.089-.708.219-1.063.339a9.223 9.223 0 0 1-.885.274 2.082 2.082 0 0 0-.91.284 1.495 1.495 0 0 1-.556.2 2.912 2.912 0 0 1-1.845-.81 2.09 2.09 0 0 1-.425-.628c-.231-.445-.52-1-1.276-1a1.856 1.856 0 0 0-1.495 1.031c-.3.428-.502.691-.839.691a1.58 1.58 0 0 1-.555-.143 2.268 2.268 0 0 0-.84-.197c-.678 0-1.434.475-1.434 1.156v1.168c0 .312-.17.499-.472.8a1.88 1.88 0 0 0-.707 1.37 1.232 1.232 0 0 0 .343.781l.321-.239.267-.31c-.092-.12-.13-.173-.13-.232 0-.314.17-.5.473-.804a1.878 1.878 0 0 0 .705-1.366V19.12c0-.147.328-.355.635-.355a1.575 1.575 0 0 1 .553.143 2.283 2.283 0 0 0 .841.196 1.854 1.854 0 0 0 1.494-1.03c.302-.428.504-.691.84-.691.239 0 .33.114.567.569a2.77 2.77 0 0 0 .606.86 3.635 3.635 0 0 0 2.373 1.008 2.08 2.08 0 0 0 .912-.284 1.498 1.498 0 0 1 .554-.2 4.634 4.634 0 0 0 1.14-.317c.342-.115.712-.24 1.02-.325a3.843 3.843 0 0 1 1.155-.043c.194.013.383.025.564.025a2.511 2.511 0 0 0 1.419-.485V23zM20.734 10.12a3.23 3.23 0 0 0-1.215 1.396c-.351.624-.557.95-1.047.95a1.178 1.178 0 0 1-.717-.338 1.92 1.92 0 0 0-1.198-.5 1.5 1.5 0 0 0-1.418 1.536c0 .643-.567 1.875-1.455 1.875a1.105 1.105 0 0 1-1.106-.548c-.373-.669-.796-1.427-1.766-1.427a1.841 1.841 0 0 0-1.776 1.897 3.159 3.159 0 0 0 .131.848 2.405 2.405 0 0 1 .107.648 1.855 1.855 0 0 1-.31.915 2.584 2.584 0 0 0-.407 1.3 1.327 1.327 0 0 0 1.417 1.236 2.573 2.573 0 0 0 1.03-.221 1.45 1.45 0 0 1 .784-.14c.278.028.418.528.418.8 0 .47-.368.839-.795 1.264-.648.647-1.454 1.451-.778 2.802.245.489.856.632 1.504.783.876.205 1.266.357 1.266.715a2.482 2.482 0 0 0 .131.725.896.896 0 0 1 .067.443 2.159 2.159 0 0 1-.353.523 2.228 2.228 0 0 0-.638 1.361.59.59 0 0 0 .018.136H3.9V7.9h17.602c.139.9.089 1.756-.768 2.22z'
						]
					},
					{
						label: 'ArcGIS Online',
						href: 'https://www.esri.com/software/arcgis/arcgisonline',
						icon: [
							'M37.396 37.211l3.898 2.274L27.5 47.53l-13.794-8.046 3.898-2.274.794.463-3.104 1.81 3.736 2.18a19.35 19.35 0 0 1 3.408-1.633l.892.52-.418.148a18.678 18.678 0 0 0-3.078 1.435l7.666 4.471 6.635-3.87-3.105-1.81.794-.464 3.105 1.81 3.174-1.851a24.69 24.69 0 0 0-4.61-.932l1.123-.656a23.867 23.867 0 0 1 4.414 1.047l.676-.394-3.105-1.81zm1.012-22.16A11.768 11.768 0 0 0 26.35 4.767a11.829 11.829 0 0 0-10.613 5.857 7.369 7.369 0 0 0-2.312-.374 7.457 7.457 0 0 0-7.437 7.87A9.797 9.797 0 0 0 9.9 36.9H12v-.8H9.9a8.997 8.997 0 0 1-3.342-17.352l.278-.111a8.811 8.811 0 0 1-.061-.937 6.635 6.635 0 0 1 9.01-6.21l.332.126.164-.316A11.006 11.006 0 0 1 26.35 5.566a10.973 10.973 0 0 1 11.295 9.882l.031.326.326.034a10.176 10.176 0 0 1 3.578 19.168l.366.71a10.976 10.976 0 0 0-3.538-20.635zm-1.036 15.168l3.922 2.287L27.5 40.552l-13.794-8.046 3.922-2.287.794.463-3.128 1.824 2.197 1.282 3.127-1.825.795.463-3.128 1.825 6.674 3.893 12.206-7.12-.587-.342zm2.334 2.287l-1.747-1.019-12.206 7.12 1.747 1.02zM23.9 24.5a.6.6 0 1 0 .6-.6.6.6 0 0 0-.6.6zm-.4 2.1a.9.9 0 1 1-.9.9.901.901 0 0 1 .9-.9zm4-9.146L13.706 25.5 27.5 33.546 41.294 25.5zM39.706 25.5l-10.382 6.056c-.495-.69-.525-.943-.525-.99a2.049 2.049 0 0 1 .431-1.192 2.2 2.2 0 0 0 .455-1.225 1.905 1.905 0 0 0-1.077-1.504c-.43-.299-.693-.5-.693-.77a4.37 4.37 0 0 1 .212-.648 4.912 4.912 0 0 0 .4-1.514 1.354 1.354 0 0 0-.502-1.094 34.71 34.71 0 0 0-3.484-2.514L27.5 18.38zm-24.412 0l8.47-4.941a34.305 34.305 0 0 1 3.753 2.677.567.567 0 0 1 .21.477 4.636 4.636 0 0 1-.35 1.233 3.07 3.07 0 0 0-.262.926c0 .713.575 1.11 1.038 1.43.455.316.732.53.732.847a1.491 1.491 0 0 1-.328.793A2.805 2.805 0 0 0 28 30.566a2.53 2.53 0 0 0 .63 1.395l-1.13.66zm17.206-.9a.9.9 0 1 1-.9.9.901.901 0 0 1 .9-.9z'
						]
					},
					{
						label: 'ArcGIS Enterprise',
						href: 'https://www.esri.com/arcgis/products/arcgis-enterprise/Overview',
						icon: [
							'M13 15h-2v-2h2zm4-2h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zM13 24h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zM13 35h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm17.4-1.5a.9.9 0 1 0-.9.9.901.901 0 0 0 .9-.9zm-25 12a.9.9 0 1 0-.9.9.901.901 0 0 0 .9-.9zm-18-38a.9.9 0 1 0-.9.9.901.901 0 0 0 .9-.9zm20-5a.9.9 0 1 0-.9.9.901.901 0 0 0 .9-.9zM7.1 29.9h33.8v-9.8H7.1zm.8-9h32.2v8.2H7.9zm-.8 20h33.8v-9.8H7.1zm.8-9h32.2v8.2H7.9zM7.1 9.1v9.8h33.8V9.1zm33 9H7.9V9.9h32.2zM4.923 5.138l-.571-.56A14.923 14.923 0 0 1 19.492.789l-.241.763A14.08 14.08 0 0 0 4.923 5.138zM13.856 42.5a20.468 20.468 0 0 0 3.288 2.133l.367-.711a19.588 19.588 0 0 1-2.297-1.422zm14.01-35a14.9 14.9 0 0 0-2.444-3.148l-.56.57A14.132 14.132 0 0 1 26.937 7.5zM5.5 25.397A14.047 14.047 0 0 1 1.552 10.75l-.763-.241A14.836 14.836 0 0 0 5.5 26.45zm37-11.527v1.319a19.62 19.62 0 0 1 3.272 14.904l.787.145A20.395 20.395 0 0 0 42.5 13.87zM37.817 42.5a19.613 19.613 0 0 1-13.963 3.423l-.107.793A20.373 20.373 0 0 0 39.124 42.5zm4.683-4.687v1.318a20.462 20.462 0 0 0 1.69-2.463l-.694-.4c-.305.53-.641 1.044-.996 1.545z'
						]
					},
					{
						label: 'Apps',
						href: 'https://www.esri.com/software/apps',
						icon: [
							'M34.489 3.155l-9.37 4.408v4.128l.801.248V8.07l8.63-4.059 8.569 2.649v13.41l-8.63 4.084-4.489-1.4v.838l4.55 1.42 9.37-4.436V6.07l-9.431-2.915z',
							'M22 35.04l-6.03 2.854L4.9 34.439V17.152l11.13-5.235 11.07 3.422v12.408l.8-.377V14.749l-11.93-3.687L4.1 16.645v18.382l11.93 3.724L22 35.925v-.885z',
							'M30.97 28.247L24.1 31.48v10.627l6.93 2.164 6.87-3.252v-10.63zm6.13 12.265l-6.13 2.901-6.07-1.894v-9.533l6.13-2.884 6.07 1.877z'
						]
					}
				]
			},
			{
				label: 'Industries',
				menus: [
					{
						label: 'Banking',
						href: 'https://www.esri.com/industries/banking'
					},
					{
						label: 'Education',
						href: 'https://www.esri.com/industries/education'
					},
					{
						label: 'Government',
						href: 'https://www.esri.com/industries/government'
					},
					{
						label: 'Health and Human Services',
						href: 'https://www.esri.com/industries/health'
					},
					{
						label: 'Insurance',
						href: 'https://www.esri.com/industries/insurance'
					},
					{
						label: 'Manufacturing',
						href: 'https://www.esri.com/industries/manufacturing'
					},
					{
						label: 'Natural Resources',
						href: 'https://www.esri.com/industries/natural-resources'
					},
					{
						label: 'Petroleum',
						href: 'https://www.esri.com/industries/petroleum'
					},
					{
						label: 'Public Safety',
						href: 'https://www.esri.com/industries/public-safety'
					},
					{
						label: 'Real Estate',
						href: 'https://www.esri.com/industries/real-estate'
					},
					{
						label: 'Retail',
						href: 'https://www.esri.com/industries/retail'
					},
					{
						label: 'Telecommunications',
						href: 'https://www.esri.com/industries/telecom'
					},
					{
						label: 'Transportation',
						href: 'https://www.esri.com/industries/transportation'
					},
					{
						label: 'Utilities',
						href: 'https://www.esri.com/industries/utilities-communications'
					},
					{
						label: 'Water Resources',
						href: 'https://www.esri.com/industries/water-resources'
					},
					{
						label: 'See all industries',
						href: 'https://www.esri.com/industries'
					}
				],
				tiles: [
					{
						label: 'Location Strategy',
						href: 'https://www.esri.com/location-strategy',
						icon: [
							'M11.5 27.7a1.8 1.8 0 1 1-1.8 1.8 1.802 1.802 0 0 1 1.8-1.8zm-.75 1.8a.75.75 0 1 0 .75-.75.751.751 0 0 0-.75.75zM28.5 14.7a1.8 1.8 0 1 0 1.8 1.8 1.802 1.802 0 0 0-1.8-1.8zm0 2.55a.75.75 0 1 1 .75-.75.751.751 0 0 1-.75.75zm4 12.45a1.8 1.8 0 1 0 1.8 1.8 1.802 1.802 0 0 0-1.8-1.8zm0 2.55a.75.75 0 1 1 .75-.75.751.751 0 0 1-.75.75zm3-13.55a1.8 1.8 0 1 0 1.8 1.8 1.802 1.802 0 0 0-1.8-1.8zm0 2.55a.75.75 0 1 1 .75-.75.751.751 0 0 1-.75.75zm-29 1.45a1.8 1.8 0 1 1-1.8 1.8 1.802 1.802 0 0 1 1.8-1.8zm-.75 1.8a.75.75 0 1 0 .75-.75.751.751 0 0 0-.75.75zm18.85-15a.9.9 0 1 0 .9-.9.901.901 0 0 0-.9.9zm7 4a.9.9 0 1 0 .9-.9.901.901 0 0 0-.9.9zm-2 23a.9.9 0 1 0 .9-.9.901.901 0 0 0-.9.9zm-12.9 3a.9.9 0 1 0 .9-.9.901.901 0 0 0-.9.9zm-3.1-15a.9.9 0 1 0 .9-.9.901.901 0 0 0-.9.9zm2.083-4.575l-.596-.596a9.32 9.32 0 0 0-.874 2.711l.79.124a8.493 8.493 0 0 1 .68-2.239zm-5.838-5.838l-.466-.466c-.038-.038-.065-.083-.1-.123a17.337 17.337 0 0 0-3.082 8.162l.795.084a16.527 16.527 0 0 1 2.853-7.657zm2.307 2.307a13.347 13.347 0 0 0-1.625 10.469l.774-.202a12.555 12.555 0 0 1 1.433-9.685zM7.31 27.179l-.78.177a17.427 17.427 0 0 0 8.715 11.459l.38-.704A16.632 16.632 0 0 1 7.31 27.179zm6.344 4.177l-.625.5A13.348 13.348 0 0 0 23.5 36.9v-.8a12.55 12.55 0 0 1-9.845-4.745zm1.85-4.688l-.744.295A9.36 9.36 0 0 0 23.5 32.9v-.8a8.563 8.563 0 0 1-7.995-5.433zm4.33 13.844a17.43 17.43 0 0 0 3.665.388v-.8a16.626 16.626 0 0 1-3.497-.37zm1.704 3.496l-.074.797A21.4 21.4 0 0 1 2.198 25.568l.797-.076A20.597 20.597 0 0 0 21.54 44.008zm0-41.016l-.074-.797a21.388 21.388 0 0 0-19.272 19.3l.796.075A20.586 20.586 0 0 1 21.54 2.992zm22.466 18.519l.797-.076a21.401 21.401 0 0 0-19.267-19.24l-.074.797a20.598 20.598 0 0 1 18.544 18.519zM25.46 44.008l.075.797a21.388 21.388 0 0 0 19.272-19.303l-.797-.074a20.586 20.586 0 0 1-18.55 18.58zM20.699 23.5a2.772 2.772 0 0 1 .566-1.67L11.217 11.784l.566-.566 10.048 10.048A2.775 2.775 0 0 1 23.5 20.7a2.8 2.8 0 1 1-2.8 2.8zm2.801-2a2 2 0 1 0 2 2 2.003 2.003 0 0 0-2-2zM23.9 0h-.8v3h.8zm20.131 23.069v.8h3v-.8zM23.1 47h.8v-3h-.8zM3.031 23.131h-3v.8h3z'
						]
					},
					{
						label: 'Operational Intelligence',
						href: 'https://www.esri.com/operational-intelligence',
						icon: [
							'M18 37.9h-7.1V45h-.8v-7.1H3v-.8h7.1V30h.8v7.1H18zM11 17H9v2h2zm3-8v4h4V9zm3 3h-2v-2h2zm16 21h-2v2h2zm-5 4h-1v1h1zm8-9v3h3v-3zm2 2h-1v-1h1zM32.1 3.1v13.148l3.106-4.348H44.9V3.1zm12 8h-9.306L32.9 13.752V3.9h11.2zM42 6.9h-7v-.8h7zm0 2h-7v-.8h7zm-.833 4.6h-.936a19.413 19.413 0 0 1 2.755 9.6H32.83a9.348 9.348 0 0 0-8.93-8.93V4.02a19.412 19.412 0 0 1 6.6 1.289v-.847A20.247 20.247 0 0 0 3.22 23.1l-.004.8a20.345 20.345 0 0 0 3.93 11.6h.997a19.538 19.538 0 0 1-4.126-11.6H14.17a9.348 9.348 0 0 0 8.93 8.93v10.155a19.346 19.346 0 0 1-10.6-3.395v.957A20.27 20.27 0 0 0 43.78 23.9l.006-.8a20.23 20.23 0 0 0-2.619-9.6zM4.02 23.1A19.502 19.502 0 0 1 23.1 4.02v10.15a9.348 9.348 0 0 0-8.93 8.93zm10.93.4a8.55 8.55 0 1 1 8.55 8.55 8.56 8.56 0 0 1-8.55-8.55zm8.95 19.48V32.83a9.348 9.348 0 0 0 8.93-8.93h10.15A19.502 19.502 0 0 1 23.9 42.98zm-.4-22.83a3.35 3.35 0 1 0 3.35 3.35 3.354 3.354 0 0 0-3.35-3.35zm0 5.9a2.55 2.55 0 1 1 2.55-2.55 2.553 2.553 0 0 1-2.55 2.55z'
						]
					},
					{
						label: 'Smart Communities',
						href: 'https://www.esri.com/smart-communities',
						icon: [
							'M7 32.1h4v.8H7zm24 6.8h3.757v-.8H31zm0 2h3.757v-.8H31zm-24-2h4v-.8H7zm20-10.8h-2v.8h2zM7 35.9h4v-.8H7zm20-10.8h-2v.8h2zM47.4 44c0 2.861-13.994 3.9-23.4 3.9S.6 46.861.6 44c0-.737.805-1.337 2.5-1.879V29.1h3v-4h5.6l3.2 4.267V33.1h3.2v-6.233l1-1.334V15h.01l-1.01-1.094V3.843L21.575.1H27.9v6h2v21h4.2v-4.738l3.33-4.262h5.47v23.498c4.016.868 4.5 1.783 4.5 2.402zm-.8 0c0-.032-.053-.773-3.7-1.584V43h-.8V18.9h-4.28l-2.92 3.738V27.9h-5v5.2h2.2v-2h5.8V44h-.8v-8.1h-3v-2h-7v-2h-4.2V44h-.8V31.1h5.8v2h1.2V6.9h-2v-6h-5.175L18.9 4.157v9.437l3 3.25v6.29l-3 4V44h-.8V33.9h-4v-4.267L11.3 25.9H6.9v4h-3V43h-.8v-.039c-1.322.455-1.7.858-1.7 1.039 0 1.294 8.598 3.1 22.6 3.1s22.6-1.806 22.6-3.1zM21.1 22.867v-5.71l-1.2-1.3v8.609zM34.9 33.1v2h2.2v-3.2h-4.2v1.2zm2.2-5.1h.8v-2.791h-.8zM27 19.1h-2v.8h2zm0 3h-2v.8h2zm0-6h-2v.8h2zm0-6h-2v.8h2zM39.1 28h.8v-5h-.8zM27 13.1h-2v.8h2zm-18.6-.6a.9.9 0 1 0-.9.9.901.901 0 0 0 .9-.9zm29.1-.1a.9.9 0 1 1 .9-.9.901.901 0 0 1-.9.9zm1.267 1.705l.697-.394a17.834 17.834 0 0 1 1.28 2.789h-.854a16.573 16.573 0 0 0-1.123-2.396zM31.5 6.125a18.543 18.543 0 0 1 4.292 2.962l-.541.589a18.317 18.317 0 0 0-1.621-1.327 18.097 18.097 0 0 0-2.13-1.314zM4.107 23.512c-.005-.17-.007-.341-.007-.512a18.864 18.864 0 0 1 1.795-8.05l.725.34a18.05 18.05 0 0 0-1.713 8.199L4.5 23.5zm5.66-12.861l-.584-.546A18.775 18.775 0 0 1 16.5 5.257v.856a17.943 17.943 0 0 0-6.733 4.538z'
						]
					}
				]
			},
			{
				label: 'About',
				menus: [
					{
						label: 'About Esri',
						href: 'https://www.esri.com/about-esri'
					},
					{
						label: 'WhereNext Magazine',
						href: 'https://www.esri.com/about/newsroom/publications/wherenext/'
					},
					{
						label: 'Newsroom',
						href: 'https://www.esri.com/esri-news'
					},
					{
						label: 'Events',
						href: 'https://www.esri.com/events'
					},
					{
						label: 'Partners',
						href: 'https://www.esri.com/partners'
					},
					{
						label: 'Careers',
						href: 'https://www.esri.com/careers/main'
					},
					{
						label: 'Contact Esri',
						href: 'https://www.esri.com/about-esri/contact'
					}
				],
				tiles: [
					{
						label: 'Education',
						href: 'https://www.esri.com/industries/education',
						icon: [
							'M46.887 19.709L23.5 7.549.113 19.709 5.1 22.156V41h.8V22.549l3.2 1.57v9.627c0 2.207 7.748 5.874 14.247 8.563l.153.063.154-.062c6.498-2.69 14.246-6.357 14.246-8.564V24.12zM23.5 8.451l21.613 11.236L23.5 30.296 6.859 22.128l16.694-2.232-.106-.793-17.88 2.391-3.68-1.807zm13.6 25.295c0 1.27-5.458 4.383-13.6 7.76-8.142-3.378-13.6-6.491-13.6-7.76v-9.234l13.6 6.674 13.6-6.674z'
						]
					},
					{
						label: 'Sustainable Development',
						href: 'https://www.esri.com/industries/sustainable-development',
						icon: [
							'M41.242 38.49a13.374 13.374 0 0 0-4.405-19.792 13.276 13.276 0 0 0-3.37-10.155 13.421 13.421 0 0 0-12.939-4.112 13.24 13.24 0 0 0-4.617 2.03l-.003-.004c-.022.015-.042.033-.065.048-.039.028-.081.05-.12.078l.006.008a13.44 13.44 0 0 0-2.812 2.688 13.712 13.712 0 0 0-1.039 1.57l-.01-.005c-.056.096-.104.196-.157.294-.039.072-.086.14-.124.214l.009.004A13.407 13.407 0 0 0 10.1 17.5c0 .403.032.8.067 1.196a13.39 13.39 0 1 0 13.32 23.217 13.384 13.384 0 0 0 15.356-.927 13.494 13.494 0 0 0 1.92-1.91l.02.017c.1-.121.189-.25.285-.374.059-.076.13-.142.186-.219zm-2.897 1.871a12.587 12.587 0 0 1-14.112 1.064 13.38 13.38 0 0 0 1.639-20.503l-.56.572a12.603 12.603 0 1 1-15.037-1.944 13.354 13.354 0 0 0 13.247 11.346 14.064 14.064 0 0 0 3.169-.365l-.18-.779a12.708 12.708 0 0 1-10.847-2.384 12.581 12.581 0 0 1-3.172-15.983 12.828 12.828 0 0 1 1.057-1.616 12.648 12.648 0 0 1 2.757-2.612 12.456 12.456 0 0 1 4.4-1.946 12.627 12.627 0 0 1 12.166 3.867 12.47 12.47 0 0 1 3.185 9.243 13.368 13.368 0 0 0-18.317 8.075l.762.245a12.587 12.587 0 1 1 19.843 13.72z'
						]
					}
				]
			},
			{
				label: 'Support',
				menus: [
					{
						label: 'Technical Support',
						href: 'https://support.esri.com/'
					},
					{
						label: 'Training',
						href: 'https://www.esri.com/training'
					},
					{
						label: 'Consulting Services',
						href: 'https://www.esri.com/arcgis/services/consulting'
					},
					{
						label: 'Managed Cloud Services',
						href: 'https://www.esri.com/arcgis/services/managed-cloud'
					},
					{
						label: 'Esri Enterprise Advantage Program',
						href: 'https://www.esri.com/arcgis/services/eeap'
					},
					{
						label: 'Esri Community (GeoNet)',
						href: 'https://geonet.esri.com/'
					},
					{
						label: 'ArcGIS Blog',
						href: 'https://blogs.esri.com/esri/arcgis/'
					},
					{
						label: 'Contact Esri',
						href: 'https://www.esri.com/about-esri/contact'
					}
				]
			}
		]
	],
	search: {
		label: 'Search',
		image: [
			'M15.61 14.531l8.132 8.133-1.078 1.078-8.156-8.18-.188.188c-.844.672-1.773 1.164-2.789 1.476s-2.04.446-3.07.399a8.513 8.513 0 0 1-5.648-2.508c-.86-.859-1.5-1.824-1.922-2.894s-.633-2.16-.633-3.27.211-2.199.633-3.27 1.062-2.027 1.922-2.87c.843-.86 1.8-1.5 2.87-1.922s2.16-.633 3.27-.633 2.2.211 3.27.633 2.035 1.062 2.894 1.922a8.406 8.406 0 0 1 1.805 2.648 8.61 8.61 0 0 1 .293 6.094 8.626 8.626 0 0 1-1.512 2.812l-.14.141.046.023zm-6.704 1.594c.797 0 1.574-.13 2.332-.387a7.404 7.404 0 0 0 2.098-1.113l1.242-1.265a7.209 7.209 0 0 0 1.547-4.864 7.071 7.071 0 0 0-2.086-4.629c-.672-.687-1.445-1.21-2.32-1.57s-1.797-.539-2.766-.539-1.89.18-2.765.54-1.649.882-2.32 1.57c-.704.703-1.231 1.496-1.583 2.378s-.527 1.785-.527 2.707.176 1.825.527 2.707.88 1.676 1.582 2.38a7.049 7.049 0 0 0 2.309 1.546 7.06 7.06 0 0 0 2.73.539z'
		],
		dialog: {
			prefix: 'esri-header-search-dialog',
			action: 'https://pages.codehub.esri.com/marketing/esri-search-page/',
			label: 'Esri',
			'submitLabel': 'Search',
			'cancelLabel': 'Cancel',
			'queryLabel': 'Search Esri.com'
		}
	},
	apps: {
		label: 'Applications',
		image: 'demo.svg#apps'
	},
	account: {
		label: 'Account Profile',
		controls: {
			signin: 'Sign In',
			signout: 'Sign Out',
			switch: 'Switch Account'
		},
		menus: [
			{
				label: 'Profile & Settings',
				href: '#user-menu-link-1'
			},
			{
				label: 'My Esri',
				href: '#user-menu-link-2'
			},
			{
				label: 'Training',
				href: '#user-menu-link-3'
			},
			{
				label: 'Community & Forums',
				href: '#user-menu-link-4'
			}
		],
		user: {
			name: 'Cassidy Bishop',
			id: 'cassidy_riverside',
			group: 'Riverside City Mgmt.',
			image: '//placehold.it/300x300'
		}
	}
}) : null;

// when the document content has loaded
document.addEventListener('DOMContentLoaded', function () {
	const $barrier = document.querySelector('.esri-header-barrier');

	if ($esriHeader && $barrier) {
		$barrier.appendChild($esriHeader);
	}
});