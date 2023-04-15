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

const calculateTax = () => {
    var income = parseFloat(document.getElementById("income").value);
    var tax = 0;

    // Tax calculation logic - modify as needed
    if (income <= 35300) {
        tax = income * 0.20;
    } else if (income <= 70600) {
        tax = income * 0.40;
    } else {
        tax = income * 0.45;
    }
    let moneyLeft = income - tax

    document.getElementById("taxResult").innerHTML = "Tax Amount: €" + tax.toFixed(2);
    document.getElementById("moneyLeft").innerHTML = "Amount Left: €" + moneyLeft.toFixed(2)

}

