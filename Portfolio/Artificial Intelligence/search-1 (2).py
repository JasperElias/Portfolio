# search.py
# --------- Jasper Ladkin
# Licensing Information:  You are free to use or extend these projects for
# educational purposes provided that (1) you do not distribute or publish
# solutions, (2) you retain this notice, and (3) you provide clear
# attribution to UC Berkeley, including a link to http://ai.berkeley.edu.
# 
# Attribution Information: The Pacman AI projects were developed at UC Berkeley.
# The core projects and autograders were primarily created by John DeNero
# (denero@cs.berkeley.edu) and Dan Klein (klein@cs.berkeley.edu).
# Student side autograding was added by Brad Miller, Nick Hay, and
# Pieter Abbeel (pabbeel@cs.berkeley.edu).


"""
In search.py, you will implement generic search algorithms which are called by
Pacman agents (in searchAgents.py).
"""

import util
import searchAgents

class SearchProblem:
    """
    This class outlines the structure of a search problem, but doesn't implement
    any of the methods (in object-oriented terminology: an abstract class).

    You do not need to change anything in this class, ever.
    """

    def getStartState(self):
        """
        Returns the start state for the search problem.
        """
        util.raiseNotDefined()

    def isGoalState(self, state):
        """
          state: Search state

        Returns True if and only if the state is a valid goal state.
        """
        util.raiseNotDefined()

    def getSuccessors(self, state):
        """
          state: Search state

        For a given state, this should return a list of triples, (successor,
        action, stepCost), where 'successor' is a successor to the current
        state, 'action' is the action required to get there, and 'stepCost' is
        the incremental cost of expanding to that successor.
        """
        util.raiseNotDefined()

    def getCostOfActions(self, actions):
        """
         actions: A list of actions to take

        This method returns the total cost of a particular sequence of actions.
        The sequence must be composed of legal moves.
        """
        util.raiseNotDefined()


def tinyMazeSearch(problem):
    """
    Returns a sequence of moves that solves tinyMaze.  For any other maze, the
    sequence of moves will be incorrect, so only use this for tinyMaze.
    """
    from game import Directions
    s = Directions.SOUTH
    w = Directions.WEST
    return [s, s, w, s, w, w, s, w]
def searchMap(problem, structure):
    searched = []
    structure.push([(problem.getStartState(), "Stop", 0)])
def depthFirstSearch(problem):
    """
    Search the deepest nodes in the search tree first.

    Your search algorithm needs to return a list of actions that reaches the
    goal. Make sure to implement a graph search algorithm.

    To get started, you might want to try some of these simple commands to
    understand the search problem that is being passed in:

    print("Start:", problem.getStartState())
    print("Is the start a goal?", problem.isGoalState(problem.getStartState()))
    print("Start's successors:", problem.getSuccessors(problem.getStartState()))
    """
    "*** YOUR CODE HERE ***"
    stack = util.Stack()
    visited = []
    # push starting state
    startNode = (problem.getStartState(), [])
    stack.push(startNode)

    while not stack.isEmpty():
        pop = stack.pop()
        location = pop[0]
        path = pop[1]

        if location not in visited:
            visited.append(location)
            if problem.isGoalState(location):
                return path
            successors = problem.getSuccessors(location)

            for sc in list(successors):
                if sc[0] not in visited:
                    stack.push((sc[0], path + [sc[1]]))
    return []


    util.raiseNotDefined()

def breadthFirstSearch(problem):
    """Search the shallowest nodes in the search tree first."""
    "*** YOUR CODE HERE ***"
    queue = util.Queue()
    visited = []
    startNode = (problem.getStartState(), [])
    queue.push(startNode)

    while not queue.isEmpty():
        pop = queue.pop()
        location = pop[0]
        path = pop[1]

        if location not in visited:
            visited.append(location)

            if problem.isGoalState(location):
                return path

            successors = problem.getSuccessors(location)
            for sc in list(successors):
                if sc[0] not in visited:
                    queue.push((sc[0], path + [sc[1]]))
    return []
    util.raiseNotDefined()

def lowestCostFirst(problem):
    """Search the node of least total cost first."""
    "*** YOUR CODE HERE ***"
    from util import PriorityQueue
    priority_queue = PriorityQueue()
    visited = {}

    # get start state
    start_node = problem.getStartState()
    cost = 0
    action = []

    priority_queue.push((start_node, action, cost), cost)

    # looping until empty
    while not priority_queue.isEmpty():
        pop = priority_queue.pop()
        if problem.isGoalState(pop[0]):
            return pop[1]

    if pop[0] not in visited:
        visited[pop[0]] = True

        for sc, act, cst in problem.getSuccessors(pop[0]):
            if sc and sc not in visited:
                priority_queue.push((sc, pop[1] + [act], pop[2] + cst), pop[2] + cst)
    util.raiseNotDefined()

def nullHeuristic(state, problem=None):
    """
    A heuristic function estimates the cost from the current state to the nearest
    goal in the provided SearchProblem.  This heuristic is trivial.
    """
    return 0

def aStarSearch(problem, heuristic=nullHeuristic):
    """Search the node that has the lowest combined cost and heuristic first."""
    "*** YOUR CODE HERE ***"
    from util import PriorityQueue
    priority_queue = PriorityQueue()
    visited = {}

    # get start state
    start_node = problem.getStartState()
    cost = 0
    action = []

    priority_queue.push((start_node, action, cost), cost)

    # empty the queue
    while not priority_queue.isEmpty():
        pop = priority_queue.pop()
        if problem.isGoalState(pop[0]):
            return pop[1]

        if pop[0] not in visited:
            visited[pop[0]] = True

            for sc, act, cst in problem.getSuccessors(pop[0]):
                if sc and sc not in visited:
                    priority_queue.push((sc, pop[1] + [act], pop[2] + cst), pop[2] + cst + heuristic(sc, problem))
    util.raiseNotDefined()


# Abbreviations
bfs = breadthFirstSearch
dfs = depthFirstSearch
lcf = lowestCostFirst
astar = aStarSearch
