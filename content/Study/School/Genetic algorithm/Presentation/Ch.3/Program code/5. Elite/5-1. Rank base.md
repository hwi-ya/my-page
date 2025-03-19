- ## Caution
  - 원서에 있는 코드와 다른 부분이 존재함.

- ## Rank selection base

  ```python
  import random
  
  def selection_rank_with_elite(individuals, elite_size=0):  # elite_size는 상위 몇 개를 엘리트 선택으로 가져올 것인지 결정
  
      # 1. 개체들을 fitness 값에 따라 내림차순으로 정렬
      sorted_individuals = sorted(individuals, key=lambda ind: ind.fitness, reverse=True)
  
      # 2. 엘리트 선택: 상위 elite_size개의 개체를 먼저 선택
      selected = sorted_individuals[0:elite_size]
      
      # 3. 엘리트 개체를 제외한 나머지 개체들로 리스트 갱신
      del sorted_individuals[0:elite_size]
  
      # 4. 순위 선택을 위한 준비 작업
      rank_distance = 1 / len(sorted_individuals)  # 각 개체 간 순위 점수 차이 계산
      ranks = [(1 - i * rank_distance) for i in range(len(sorted_individuals))]  # 순위에 따른 가중치 부여
      ranks_sum = sum(ranks)  # 모든 가중치의 합 계산
      
      # 5. 엘리트 선택에서 제외된 개체들 중에서 순위 선택 방식으로 추가 개체를 선택
      for i in range(len(sorted_individuals)):  
          shave = random.random() * ranks_sum  # 0과 ranks_sum 사이의 랜덤 값 생성
          rank_sum = 0  # 누적 가중치 초기화
  
          for i in range(len(sorted_individuals)):
              rank_sum += ranks[i]  # 현재 개체의 가중치를 누적
              if rank_sum >= shave:  # 누적 가중치가 shave 값을 초과하면 해당 개체 선택
                  selected.append(sorted_individuals[i])
                  break  # 선택했으므로 반복 종료
  
      # 6. 최종 선택된 개체 리스트 반환
      return selected  
  ```
