    var totalWords = 199;
                var displayed = [];
                function updateWordCount(diff,pos){
                    var change=0;
                    switch(diff){
                        case "around": change = 43;
                        break;
                        case "evolving": change = 26;
                        break;
                        case "styles": change = 16;
                        break;
                        case "could": change = 37;
                        break;
                        case "wish": change = 26;
                        break;
                        case "my": change = 4;
                        break;
                        default:
                    }
                    if (pos){totalWords += change;}
                    else {totalWords -= change;}
                    if (totalWords >= 250){return false;}
                    $("#wordcount").html("Word Count = <br>" + totalWords);
                }

                function displaySecondary(tar){
                    if (alreadyDisplayed(tar) === true){return;}
                    if (updateWordCount(tar,true) === false){return;} else
                        {
                            tar = "#" + tar;
                            $(tar).fadeIn("slow");
                        }
                }

                function alreadyDisplayed (sec){
                    for(var i=0;i<displayed.length+1;i++){
                        if (displayed[i]===sec){ return true;}
                    }
                    displayed.push(sec);
                    return false;
                }

                function notDisplayed(not){
                    for (var x=0;x<displayed.length+1;x++){
                        if (displayed[x]==not){displayed.splice(x,1);}
                    }
                }

                $(document).ready( function(){
                    updateWordCount(0);
                    $('.secondary').click(function(){
                        var currentID = $(this).attr('id');
                        updateWordCount(currentID,false);
                        $(this).fadeOut("slow");
                        notDisplayed(currentID);
                    });
                });