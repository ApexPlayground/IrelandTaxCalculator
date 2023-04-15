document.addEventListener('DOMContentLoaded', function () {
    var taxTypeSelect = document.getElementById('taxType');
    var menuContainer = document.getElementById('menuContainer');

    taxTypeSelect.addEventListener('change', function () {
        var selectedTax = this.value;
        var menus = document.getElementsByClassName('menu');

        // Hide all menus
        for (var i = 0; i < menus.length; i++) {
            menus[i].style.display = 'none';
        }

        // Show selected menu based on the selected option value
        var selectedMenu = document.getElementById(selectedTax + 'Menu');
        if (selectedMenu) {
            selectedMenu.style.display = 'block';
            // Append the selected menu to the menuContainer
            menuContainer.innerHTML = '';
            menuContainer.appendChild(selectedMenu);
        }
    });
});
