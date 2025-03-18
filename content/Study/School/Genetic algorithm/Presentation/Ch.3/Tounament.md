- ## Population create
    
    ```python
    import random
    from ch3.selection_tournament import selection_tournament
    from ch3.individual import Individual
    
    # 초기 설정
    POPULATION_SIZE = 5
    
    # 유전 알고리즘 흐름
    random.seed(18)
    
    # 첫 번째 개체군 생성
    population = Individual.create_random_population(POPULATION_SIZE)
    
    # 선택
    selected = selection_tournament(population, group_size=3)
    
    # 결과 출력
    print(f"Population: {population}")
    print(f"Selected: {selected}")
    ```
    
    - ch3
        - individual
            
            ```python
            import random
            
            class Individual:
                def __init__(self, name: str, fitness: int) -> None:
                    self.name = name
                    self.fitness = fitness
            
                def __repr__(self):
                    return f"{self.name}: {self.fitness}"
            
                @classmethod
                def create_random(cls, name: str) -> 'Individual':
                    # 예시로 임의의 fitness 값을 설정 (1~10)
                    fitness = random.randint(1, 10)
                    return cls(name, fitness)
            
                @classmethod
                def create_random_population(cls, size: int) -> list['Individual']:
                    # 개체군을 생성할 이름들 (A, B, C, D, E)
                    # names = ['A', 'B', 'C', 'D', 'E']         # 얘 때문에 기존 코드로 실행시 개체군이 5개 밖에 나오지 않는 문제 발생
                    names = [chr(65 + i) for i in range(size)]  # 얘로 바꾸니 해결 됨 65는 'A'의 ASCII 코드
                    return [cls.create_random(name) for name in names[:size]]
            ```
            
        - selection_tournament
            
            ```python
            import random
            
             def selection_tournament(population, group_size):
                selected = []
                for _ in range(len(population)):
                    candidates = [random.choice(population) for _ in range(group_size)]
                    selected.append(max(candidates, key = lambda ind: ind.fitness))
                return selected
            ```

- ## Visualization
        
    ```python
    import random
    import pandas as pd
    import matplotlib.pyplot as plt
    from ch3.individual import Individual
    
    # 개체군 크기
    POPULATION_SIZE = 10
    # 서브그룹 크기?
    TOURNAMENT_SIZE = 3
    
    # 개체군 생성
    population = Individual.create_random_population(POPULATION_SIZE)
    
    # 토너먼트 후보 선택
    candidates = [random.choice(population) for _ in range(TOURNAMENT_SIZE)]
    
    # 후보 중 최고 개체 선택
    best = [max(candidates, key=lambda ind: ind.fitness)]
    
    # 개체 시각화 함수
    def plot_individuals(individual_set):
        df = pd.DataFrame({
            'name': [ind.name for ind in individual_set],
            'fitness': [ind.fitness for ind in individual_set]
        })
        df.plot.bar(x='name', y='fitness', rot=0)
        plt.show()
    
    # 개체군, 후보군, 최고 개체 시각화
    plot_individuals(population)
    plot_individuals(candidates)
    plot_individuals(best)
    ```
