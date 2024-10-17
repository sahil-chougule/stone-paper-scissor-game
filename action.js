if(window.location.pathname.includes("play.html"))
{

                   let user_choice=localStorage.getItem("user_choice").trim()
                   console.log("user choice="+user_choice)
                   document.querySelector("#left_fist").classList.add("apply_anime_on_left_fist")
                   document.querySelector("#right_fist").classList.add("apply_anime_on_right_fist")
                   let choice_array=["Rock", "Paper", "Scissor"];
                   let random_choice_num=Math.floor(Math.random()*choice_array.length);
                   let random_choice=choice_array[random_choice_num]
                   console.log(random_choice+" is selected");
                   let left_img=document.querySelector("#left_fist")
                   let right_img=document.querySelector("#right_fist")
                   let right_option_name=document.querySelector(".option_chosen_user")
                   let left_option_name=document.querySelector(".option_chosen_cmp")
                   let game_result=document.querySelector(".game_result")
                   let result_highlight=document.querySelector(".result_highlight");
                   result_highlight.classList.add("result_anime")
                   let win_tag="You Win!!"
                   let tie_tag="Tie!!"
                   let lose_tag="You   lose!!"
                  setTimeout( ()=>{
                    game_result.style.visibility="visible"
                result_highlight.style.visibility="visible"
4
                    if(random_choice===user_choice)
                         {
                          console.log("tue")
                          if(random_choice==="Paper")
                          {
                              left_paper();
                              right_paper();
                              result_highlight.textContent=tie_tag
                          }
                          else if(random_choice==="Scissor")
                          {
                              right_scissor();
                              left_scissor();
                              result_highlight.textContent=tie_tag

                          }
                          else
                          {
                              right_fist();
                              left_fist();
                              result_highlight.textContent=tie_tag

                          }
                         }
                        else
                        {
                           if(random_choice==="Paper" && user_choice==="Scissor")
                           {
                            left_paper();
                            right_scissor();
                            game_result.textContent="Paper beat Scissor"
                            result_highlight.textContent=win_tag

                           }
                           else if(random_choice==="Paper" && user_choice==="Rock")
                           {
                            left_paper();
                            right_fist();
                            game_result.textContent="Paper beat rock"
                            result_highlight.textContent=lose_tag

                           }
                           else if(random_choice==="Scissor" && user_choice==="Rock")
                            {
                             left_scissor();
                             right_fist();
                             game_result.textContent="Rock beat Scissor"
                             result_highlight.textContent=win_tag

                            }
                            else if(random_choice==="Scissor" && user_choice==="Paper")
                                {
                                 left_scissor();
                                 right_paper();
                                 game_result.textContent="Scissor beat Paper"
                                 result_highlight.textContent=lose_tag


                                }
                                else if(random_choice==="Rock" && user_choice==="Paper")
                                    {
                                     left_fist()
                                     right_paper();
                                     game_result.textContent="Paper beat Rock"
                                     result_highlight.textContent=win_tag


                                    }
                                    else if(random_choice==="Rock" && user_choice==="Scissor")
                                        {
                                         left_fist()
                                         right_scissor();
                                         game_result.textContent="Rock beat Scissor"
                                         result_highlight.textContent=lose_tag


                                        }   
                           
                        }
                         
                  }, 1500)

                  function go_back()
                 {
                    window.location.href="index.html"
                 }
                 document.querySelector("body").addEventListener("click", (event2)=>{go_back()}, {once:true})

                  
                   function left_scissor()
                   {
                        left_img.src="images/left_scissor_img.png"
                        left_option_name.innerText="Scissor"
                   }
                   function right_scissor()
                   {
                        right_img.src="images/right_scissor_img.png"
                        right_option_name.innerText="Scissor"
                   }
                   function left_paper()
                   {
                        left_img.src="images/left_paper_img.png"
                        left_option_name.innerText="Paper" 
                                      }
                   function right_paper()
                   {
                        right_img.src="images/right_paper_img.png"
                        right_option_name.innerText="Paper"
                   }
                   function left_fist()
                   {
                       left_img.src="images/left_fist_imag.png"
                       left_option_name.innerText="Rock"                   }
                   function right_fist()
                   {
                       right_img.src="images/fist_right_img.png"
                       right_option_name.innerText="Rock"                  
                   }
                   

}
function choice_selected(event)
{   
    let ele=event.target;
    let textcontent_userimg=ele.nextElementSibling.children[0].textContent
    let user_choice=localStorage.setItem("user_choice", textcontent_userimg)
    console.log(user_choice);

    window.location.href="play.html"
    
}
 
function start_game()
{
   const choice=document.querySelectorAll(".pic") 
  choice.forEach((ch) => {
        ch.addEventListener("click", (event)=>{choice_selected(event)}, {once:true} )
    });
  
}
start_game();




