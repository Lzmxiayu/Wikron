<template>
  <div id="leftside">
    <div class="leftsideWrapper">
        <ul class="leftsideList">
          <button class="leftsideListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss leftsideIcon" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"/>
            </svg>
            <span class="leftsideListItemText">Feed</span>
          </button>
          <button class="leftsideListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots leftsideIcon" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
            </svg>
            <span class="leftsideListItemText">Chats</span>
          </button>
          <button class="leftsideListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn leftsideIcon" viewBox="0 0 16 16">
              <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
            <span class="leftsideListItemText">Videos</span>
          </button>
          <!-- <li class="leftsideListItem">
            <Group class="leftsideIcon" />
            <span class="leftsideListItemText">Groups</span>
          </li>
          <li class="leftsideListItem">
            <Bookmark class="leftsideIcon" />
            <span class="leftsideListItemText">Bookmarks</span>
          </li> -->
          <button class="leftsideListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-square leftsideIcon" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
            <span class="leftsideListItemText">Questions</span>
          </button>
          <!-- <li class="leftsideListItem">
            <WorkOutline class="leftsideIcon" />
            <span class="leftsideListItemText">Jobs</span>
          </li> -->
          <!-- <li class="leftsideListItem">
            <Event class="leftsideIcon" />
            <span class="leftsideListItemText">Events</span>
          </li> -->
          <!-- <li class="leftsideListItem">
            <School class="leftsideIcon" />
            <span class="leftsideListItemText">Courses</span>
          </li> -->
        </ul>
        <button class="leftsideButton2">Show More</button>
        <hr class="leftsideHr" />
        <ul  class="leftsideFriendList">
          <li v-for="user in users"  :key="user.id" class="leftsideListItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm leftsideIcon" viewBox="0 0 16 16">
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
            </svg>
            <span class="leftsideListItemText">{{user.name}}</span>
          </li>
          <!-- {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} -->
        </ul> 
    </div>
  </div>
</template>

<script>
export default {
    name:'leftside',
    data(){
      return {
        users:[
          {
            name:'John',
            id:1,
          },
          {
            name:'Poke',
            id:2,
          },
          {
            name:'Yarn',
            id:3,
          },
          {
            name:'Ung',
            id:4,
          },
          {
            name:'Ung',
            id:5,
          },
          {
            name:'Ung',
            id:6,
          },
          {
            name:'Ung',
            id:7,
          },
          {
            name:'Ung',
            id:8,
          },

        ]
      }
    }

}
</script>

<style scoped>
#leftside {
  flex: 3;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  position: sticky;
  top: 60px;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(179, 179, 179);
}

.leftsideWrapper {
  padding: 20px;
}

.leftsideList {
  padding: 0;
  margin: 0;
  list-style: none;
}

.leftsideListItem {
  background: none;
  border:none;
  width:100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
/* .leftsideListItem:hover{
  background: rgb(236, 222, 225);
} */
.leftsideIcon {
  margin-right: 15px;
}

.leftsideButton {
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}
.leftsideButton2 {
  width: 120px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}
.leftsideButton2:hover {
  background: gray;
  opacity: 80%;
}
.leftsideHr {
  margin: 20px 0;
}

.leftsideFriendList {
  padding: 0;
  margin: 0;
  list-style: none;
}

</style>