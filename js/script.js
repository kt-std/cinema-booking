document.getElementById('bookingForm').addEventListener('change', (e)=>{
    const checkedSeats = document.querySelectorAll('.seat:checked'),
        checkedDate = document.querySelector('input[name="date"]:checked'),
        checkedTime = document.querySelector('input[name="time"]:checked'),
        checkedHall = document.querySelector('input[name="type_picker"]:checked');
    
    updateElementInnerHTML(getListOfCheckedSeats(checkedSeats), 'seatsContainer');
    appendInfoToContainer(checkedDate, 'ticketDate');
    appendInfoToContainer(checkedTime, 'ticketTime');
    appendInfoToContainer(checkedHall, 'hallContainer');
});

function appendInfoToContainer(input, containerId){
    document.getElementById(containerId).innerHTML = input.value;
}

function updateElementInnerHTML(info, containerId){
    document.getElementById(containerId).innerHTML = info;
}

function getListOfCheckedSeats(checkedSeats){
    return Array.from(checkedSeats).reduce((accumulator, seat) => accumulator += getFormattedSeatNumber(seat.value), '');
}

function getFormattedSeatNumber(seat){
    const [seatRow, seatNumber] = seat.split('_');
    return `R${seatRow}S${seatNumber}<br>`;
}
