document.addEventListener("DOMContentLoaded", function() {
    const doctorSelect = document.getElementById("doctor-select");
    const slotContainer = document.getElementById("slot-container");
    const bookAppointmentBtn = document.getElementById("book-appointment");
  
    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  
    function renderSlots() {
      slotContainer.innerHTML = "";
      timeSlots.forEach(slot => {
        const slotElement = document.createElement("div");
        slotElement.className = "slot";
        slotElement.textContent = slot;
        slotElement.addEventListener("click", () => {
          // Toggle selection
          slotElement.classList.toggle("selected");
        });
        slotContainer.appendChild(slotElement);
      });
    }
  
    doctorSelect.addEventListener("change", renderSlots);
  
    bookAppointmentBtn.addEventListener("click", () => {
      const selectedDoctor = doctorSelect.value;
      const selectedSlots = Array.from(slotContainer.querySelectorAll(".selected")).map(slot => slot.textContent);
      if (selectedSlots.length === 0) {
        alert("Please select at least one time slot.");
      } else {
        const confirmationMessage = `Appointment booked with ${selectedDoctor} for the following time slots:\n${selectedSlots.join("\n")}`;
        alert(confirmationMessage);
        // Here you would typically send the selected data to the server for further processing
        // and database storage.
      }
    });
  
    // Initial render
    renderSlots();
  });
  