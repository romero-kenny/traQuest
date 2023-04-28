document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-quest-form');
  const questList = document.getElementById('quest-list');
  const completedQuests = document.getElementById('completed-quests');
  const activeQuests = document.getElementById('active-quests');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const questName = document.getElementById('quest-name').value;
    const questReward = document.getElementById('quest-reward').value;
    const questDesc = document.getElementById('quest-desc').value;
    const questLocation = document.getElementById('quest-location').value || 'Unknown';

    const questItem = document.createElement('div');
    questItem.className = 'made-quests';
    questItem.innerHTML = `
        <h4>${questName}</h4>
        <p>Reward: ${questReward}</p>
        <p>${questDesc}</p>
        <p>Location : ${questLocation}</p>
        <button class="pursue-quest">Pursue</button>
        <button class="complete-quest">Complete</button>
        <button class="delete-quest">Delete</button>
      `;

    questList.appendChild(questItem);

    const completeButton = questItem.querySelector('.complete-quest');
    const deleteButton = questItem.querySelector('.delete-quest');

    completeButton.addEventListener('click', () => {
      activeQuests.removeChild(questItem);
      completedQuests.appendChild(questItem);
      completeButton.style.display = 'none';
    });

    deleteButton.addEventListener('click', () => {
      questList.removeChild(questItem);
    });

    form.reset();
  });

});

