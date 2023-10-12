/**
 * 获取随机整数，介于min和max之间
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      specialCount: 0,
      gameIsOver: false,
      winner: '',
      battleLogs: [],
    };
  },
  computed: {
    monsterBarStyle() {
      return {'width': this.monsterHealth + '%'}
    },
    playerBarStyle() {
      return {'width': this.playerHealth + '%'}
    },
    mayUseSpecialAttack() {
      return this.specialCount === 0;
    }
  },
  watch: {
    currentRound(value) {
      if(value > 0 && this.specialCount < 3) {
        if(value % 3 === 0) {
          this.specialCount++;
        }
      }
    },
    playerHealth(value) {
      if(value <= 0) {
        this.gameIsOver = true;
        this.playerHealth = 0;
        if(this.monsterHealth <= 0) {
          this.winner = 'Draw';
        }else {
          this.winner = 'Monster';
        }
      }
    },
    monsterHealth(value) {
      if(value <= 0) {
        this.gameIsOver = true;
        this.monsterHealth = 0;
        if(this.playerHealth <= 0) {
          this.width = 'Draw';
        }else {
          this.winner = 'Player';
        }
      }
    }
  },
  methods: {
    // 开始游戏，将属性初始化
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.specialCount = 0;
      this.gameIsOver = false;
      this.winner = '';
      this.battleLogs = [];
    },
    // player攻击monster。player的攻击力介于5和12
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addBattleLog("Player", "attack", attackValue)
      this.attackPlayer() // Monster反击
    },
    // player特殊攻击monster。攻击力介入10和25，特殊攻击不算回合
    // 特殊攻击最多保存三次，每三次普通攻击可以进行一次特殊攻击
    specialAttackMonster() {
      if(this.specialCount > 0) {
        this.specialCount--;
        const attackValue = getRandomValue(10, 25);
        this.monsterHealth -= attackValue;
        this.addBattleLog("Player", "specialAttack", attackValue)
        this.attackPlayer() // Monster反击
      }
    },
    // 治疗Player。治疗量介入8和20，治疗也算作一个回合，同时Monster会攻击Player
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20)
      if(this.playerHealth + healValue >= 100) {
        this.addBattleLog("Player", "heal", (100 - this.playerHealth))
        this.playerHealth = 100;
      }else {
        this.addBattleLog("Player", "heal", healValue)
        this.playerHealth += healValue;
      }
      this.attackPlayer() // Monster反击
    },
    // monster攻击player。monster的攻击力介于8和15
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addBattleLog("Monster", "attack", attackValue)
    },
    // 直接投降。将玩家的血量设置为0
    playerSurrender() {
      this.playerHealth = 0;
    },
    // 添加战斗日志
    addBattleLog(who, what, value) {
      // 每次战斗日志放在最前面
      this.battleLogs.unshift(
        {
          actionBy: who,
          actionType: what,
          actionValue: value
        }
      );
    }
  }
});
app.mount("#game");