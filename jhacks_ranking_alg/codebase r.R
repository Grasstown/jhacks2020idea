library(tidyverse)
library(readr)
library(pracma)

poli <- read_csv("../candidateData/a.csv")
user <- read_csv("../userData/b.csv")

enddata <- dplyr::left_join(poli, user)

norm<- function(nums){
  sum<- 0
  for(i in nums){
    sum <- sum + i^2
  }
  return(sqrt(sum))
}

enddata2 <- enddata %>%
  group_by(Name) %>%
  mutate(dotprod= dot(userscore, poliscore)) %>%
  mutate(mag1 = norm(userscore)) %>%
  mutate(mag2 = norm(poliscore)) %>%
  mutate(index = dotprod/(mag1*mag2))
  
