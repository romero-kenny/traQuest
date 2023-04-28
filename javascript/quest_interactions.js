document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-quest-form');
    const questList = document.getElementById('quest-list');
    const completeList = document.getElementById('completed-quests');
    const activeList = document.getElementById('active-quests');

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
        <p>Description:<br>${questDesc}</p>
        <p>Location: ${questLocation}</p>
        <button class="pursue-quest">Pursue</button>
        <button class="complete-quest">Complete</button>
        <button class="delete-quest">Delete</button>
      `;

        questList.appendChild(questItem);

        const completedQuest = questItem.querySelector('.complete-quest');
        const deleteQuest = questItem.querySelector('.delete-quest');
        const pursueQuest = questItem.querySelector('.pursue-quest');

        completedQuest.addEventListener('click', (event) => {
            event.preventDefault();
            completeList.appendChild(questItem);

            if (activeList.contains(completedQuest)) {
                activeList.removeChild(completedQuest);
            }
            completedQuest.style.display = 'none';
            pursueQuest.style.display = 'none';
        });

        deleteQuest.addEventListener('click', (event) => {
            event.preventDefault();
            if (activeList.contains(questItem)) {
                activeList.removeChild(questItem);
            }
            if (completeList.contains(questItem)) {
                completeList.removeChild(questItem);
            }
            if (questList.contains(questItem)) {
                questList.removeChild(questItem);
            }
        })

        pursueQuest.addEventListener('click', (event) => {
            event.preventDefault();
            activeList.appendChild(questItem);
            pursueQuest.style.display = 'none';
        })

        form.reset();
    });

});
